'use strict';
module.exports = function(sequelize, DataTypes) {
  var ticket = sequelize.define('ticket', {
    requester_id: DataTypes.BIGINT,
    requester_name: DataTypes.STRING,
    associates_rdb: DataTypes.STRING,
    association_type: DataTypes.STRING,
    cc_email: DataTypes.STRING,
    created_at: DataTypes.DATE,
    deleted: DataTypes.BOOLEAN,
    delta: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    description_html: DataTypes.TEXT,
    dirty: DataTypes.BOOLEAN,
    display_id: {
      type: DataTypes.BIGINT,
      primaryKey: true
    },
    due_by: DataTypes.DATE,
    email_config_id: DataTypes.BIGINT,
    frDueBy: DataTypes.STRING,
    fr_escalated: DataTypes.BOOLEAN,
    group_id: DataTypes.BIGINT,
    id: DataTypes.BIGINT,
    internal_agent_id: DataTypes.BIGINT,
    internal_group_id: DataTypes.BIGINT,
    isescalated: DataTypes.BOOLEAN,
    owner_id: DataTypes.BIGINT,
    parent_ticket_id: DataTypes.BIGINT,
    priority: DataTypes.INTEGER,
    responder_id: DataTypes.BIGINT,
    sl_escalation_level: DataTypes.INTEGER,
    sl_manuel_dueby: DataTypes.INTEGER,
    sl_merge_parent_ticket: DataTypes.INTEGER,
    sl_product_id: DataTypes.INTEGER,
    sl_skill_id: DataTypes.INTEGER,
    sl_sla_policy_id: DataTypes.INTEGER,
    sla_state: DataTypes.INTEGER,
    source: DataTypes.INTEGER,
    spam: DataTypes.BOOLEAN,
    st_survey_rating: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    subject: DataTypes.STRING,
    ticket_type: DataTypes.STRING,
    trained: DataTypes.BOOLEAN,
    updated_at: DataTypes.DATE,
    urgent: DataTypes.BOOLEAN,
    status_name: DataTypes.STRING,
    requester_status_name: DataTypes.STRING,
    priority_name: DataTypes.STRING,
    source_name: DataTypes.STRING,
    responder_name: DataTypes.STRING,
    to_emails: DataTypes.TEXT,
    to_email: DataTypes.STRING,
    custom_field: DataTypes.TEXT,
    product_id: DataTypes.BIGINT
  }, {
    setterMethods: {
      custom_field: function(value) {
        this.setDataValue('custom_field', JSON.stringify(value));
      },
      to_email: function(value) {
        this.setDataValue('to_email', JSON.stringify(value));
      },
      cc_email: function(value) {
        this.setDataValue('cc_email', JSON.stringify(value));
      },
      to_emails: function(value) {
        this.setDataValue('to_emails', JSON.stringify(value));
      }
    }
  });
  return ticket;
};
