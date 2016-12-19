module.exports = {
	up: function(migration, DataTypes) {
		migration.createTable('Messages', {
			username: { type: DataTypes.STRING, defaultValue: null },
			words: { type: DataTypes.TEXT, defaultValue: null }
		}, {
			charset: 'utf8'
		});
		migration.createTable('Connections', {
			username: { type: Sequelize.STRING, defaultValue: null },
			disconnectedAt: { type: Sequelize.DATE, defaultValue: null }
		}, {
			charset: 'utf8'
		});
	},
	down: function(migration) {
		migration.dropTable('Messages');
		migration.dropTable('Connections');
	}
}