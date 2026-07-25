require('dotenv').config();
const { REST,Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
    new SlashCommandBuilder()
        .setName('request-test')
        .setDescription('Send the registration and testing panel'),
    
    new SlashCommandBuilder()
        .setName('queue-start')
        .setDescription('Start a gamemode queue (Tester only)')
        .addStringOption(option => 
            option.setName('gamemode')
                .setDescription('Select gamemode')
                .setRequired(true)
                .addChoices(
                    { name: 'Axe And Shield', value: 'axe_shield' },
                    { name: 'Neth Pot', value: 'neth_pot' },
                    { name: 'Dia Pot', value: 'dia_pot' },
                    { name: 'Smp Kit', value: 'smp_kit' },
                    { name: 'Mace', value: 'mace' },
                    { name: 'Sword', value: 'sword' },
                    { name: 'Uhc', value: 'uhc' },
                    { name: 'Cpvp', value: 'cpvp' }
                )),

    new SlashCommandBuilder()
        .setName('open-ticket')
        .setDescription('Open a test ticket for a player (Tester only)')
        .addUserOption(option => option.setName('player').setDescription('Select player').setRequired(true))
        .addStringOption(option => 
            option.setName('gamemode')
                .setDescription('Gamemode')
                .setRequired(true)
                .addChoices(
                    { name: 'Axe And Shield', value: 'axe_shield' },
                    { name: 'Neth Pot', value: 'neth_pot' },
                    { name: 'Dia Pot', value: 'dia_pot' },
                    { name: 'Smp Kit', value: 'smp_kit' },
                    { name: 'Mace', value: 'mace' },
                    { name: 'Sword', value: 'sword' },
                    { name: 'Uhc', value: 'uhc' },
                    { name: 'Cpvp', value: 'cpvp' }
                )),

    new SlashCommandBuilder()
        .setName('result')
        .setDescription('Submit test result and points (Tester only)')
        .addUserOption(option => option.setName('player').setDescription('Player').setRequired(true))
        .addStringOption(option => option.setName('tier').setDescription('Tier achieved (e.g., LT4)').setRequired(true))
        .addIntegerOption(option => option.setName('points').setDescription('Points earned').setRequired(true)),

    new SlashCommandBuilder()
        .setName('profile')
        .setDescription('Check player profile')
        .addUserOption(option => option.setName('user').setDescription('User (Optional)').setRequired(false)),

    new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('View top players leaderboard'),

    new SlashCommandBuilder()
        .setName('tester-stats')
        .setDescription('Check tester statistics')
        .addUserOption(option => option.setName('tester').setDescription('Tester (Optional)').setRequired(false))
].map(command => command.toJSON());