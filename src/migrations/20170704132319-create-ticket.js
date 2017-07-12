'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('tickets', {
      requester_id: {
        type: Sequelize.BIGINT
      },
      requester_name: {
        type: Sequelize.STRING
      },
      associates_rdb: {
        type: Sequelize.STRING
      },
      association_type: {
        type: Sequelize.STRING
      },
      cc_email: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      deleted: {
        type: Sequelize.BOOLEAN
      },
      delta: {
        type: Sequelize.BOOLEAN
      },
      description: {
        type: Sequelize.TEXT
      },
      description_html: {
        type: Sequelize.TEXT
      },
      dirty: {
        type: Sequelize.BOOLEAN
      },
      display_id: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      due_by: {
        type: Sequelize.DATE
      },
      email_config_id: {
        type: Sequelize.BIGINT
      },
      frDueBy: {
        type: Sequelize.STRING
      },
      fr_escalated: {
        type: Sequelize.BOOLEAN
      },
      group_id: {
        type: Sequelize.BIGINT
      },
      id: {
        type: Sequelize.BIGINT
      },
      internal_agent_id: {
        type: Sequelize.INTEGER
      },
      internal_group_id: {
        type: Sequelize.INTEGER
      },
      isescalated: {
        type: Sequelize.BOOLEAN
      },
      owner_id: {
        type: Sequelize.BIGINT
      },
      parent_ticket_id: {
        type: Sequelize.BIGINT
      },
      priority: {
        type: Sequelize.INTEGER
      },
      responder_id: {
        type: Sequelize.BIGINT
      },
      sl_escalation_level: {
        type: Sequelize.INTEGER
      },
      sl_manuel_dueby: {
        type: Sequelize.INTEGER
      },
      sl_merge_parent_ticket: {
        type: Sequelize.INTEGER
      },
      sl_product_id: {
        type: Sequelize.INTEGER
      },
      sl_skill_id: {
        type: Sequelize.INTEGER
      },
      sl_sla_policy_id: {
        type: Sequelize.INTEGER
      },
      sla_state: {
        type: Sequelize.INTEGER
      },
      source: {
        type: Sequelize.INTEGER
      },
      spam: {
        type: Sequelize.BOOLEAN
      },
      st_survey_rating: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING
      },
      ticket_type: {
        type: Sequelize.STRING
      },
      trained: {
        type: Sequelize.BOOLEAN
      },
      updated_at: {
        type: Sequelize.DATE
      },
      urgent: {
        type: Sequelize.BOOLEAN
      },
      status_name: {
        type: Sequelize.STRING
      },
      requester_status_name: {
        type: Sequelize.STRING
      },
      priority_name: {
        type: Sequelize.STRING
      },
      source_name: {
        type: Sequelize.STRING
      },
      responder_name: {
        type: Sequelize.STRING
      },
      to_emails: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      to_email: {
        type: Sequelize.STRING
      },
      custom_field: {
        type: Sequelize.STRING
      },
      product_id: {
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('tickets');
  }
};
