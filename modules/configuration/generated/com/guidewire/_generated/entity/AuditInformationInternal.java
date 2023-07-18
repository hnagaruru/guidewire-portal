package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AuditInformation.eti;AuditInformation.eix;AuditInformation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AuditInformationInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire.pc.domain.policy.audit.AuditInformationPublicMethods, com.guidewire.pc.domain.policy.audit.impl.AuditInformationInternalMethods {
  /**
   * Adds the given element to the AuditArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAuditArray(entity.Audit element);
  
  
  /**
   * Gets the value of the ActualAuditMethod field.
   * Actual audit method used for this audit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AuditMethod getActualAuditMethod();
  
  
  /**
   * Gets the value of the Audit field.
   * The audit job for this audit.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Audit getAudit();
  
  
  /**
   * Gets the value of the AuditArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Audit[] getAuditArray();
  
  
  /**
   * Gets the value of the AuditFee field.
   * Fee for this audit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getAuditFee();
  
  
  /**
   * Gets the value of the AuditFee_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getAuditFee_amt();
  
  
  /**
   * Gets the value of the AuditFee_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getAuditFee_cur();
  
  
  public gw.pl.persistence.core.Key getAuditID();
  
  
  /**
   * Gets the value of the AuditMethod field.
   * The audit method to be used.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AuditMethod getAuditMethod();
  
  
  /**
   * Gets the value of the AuditPeriodEndDate field.
   * End date of the audit period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAuditPeriodEndDate();
  
  
  /**
   * Gets the value of the AuditPeriodStartDate field.
   * Start date of the audit period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAuditPeriodStartDate();
  
  
  /**
   * Gets the value of the AuditScheduleType field.
   * The type of schedule that is used to schedule audits
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AuditScheduleType getAuditScheduleType();
  
  
  /**
   * Gets the value of the DueDate field.
   * Due date of the audit.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDueDate();
  
  
  /**
   * Gets the value of the FirstEscalationPrompt field.
   * The type of first escalation prompt on audit schedule pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AuditEscalationPromptType getFirstEscalationPrompt();
  
  
  /**
   * Gets the value of the InitDate field.
   * Initialization date of the audit task.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getInitDate();
  
  
  /**
   * Gets the value of the Instructions field.
   * Special instructions for the auditor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInstructions();
  
  
  /**
   * Gets the value of the NumDaysAfterFirstEscalation field.
   * Number of days after the first escalation prompt  
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumDaysAfterFirstEscalation();
  
  
  /**
   * Gets the value of the NumDaysAfterSecondEscalation field.
   *  Number of days after the second escalation prompt
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumDaysAfterSecondEscalation();
  
  
  /**
   * Gets the value of the Policy field.
   * The policy containing this audit task.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy();
  
  
  public gw.pl.persistence.core.Key getPolicyID();
  
  
  /**
   * Gets the value of the PolicyTerm field.
   * Associated policy term
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyTerm getPolicyTerm();
  
  
  public gw.pl.persistence.core.Key getPolicyTermID();
  
  
  /**
   * Gets the value of the ReceivedDate field.
   * The date the audit related information was received
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReceivedDate();
  
  
  /**
   * Gets the value of the ReversalDate field.
   * The date this audit was reversed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReversalDate();
  
  
  /**
   * Gets the value of the RevisionType field.
   * The type of revision (revision or reversal) that is applied to this audit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RevisionType getRevisionType();
  
  
  /**
   * Gets the value of the SecondEscalationPrompt field.
   * The type of second escalation prompt on audit schedule pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AuditEscalationPromptType getSecondEscalationPrompt();
  
  
  /**
   * Gets the value of the Escalated field.
   * Whether or not this audit has been escalated by the overdue premium report process.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isEscalated();
  
  
  /**
   * Gets the value of the Series field.
   * To indicate whether this is a series audit; primarily to distinguish between single checking and series checking.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSeries();
  
  
  /**
   * Gets the value of the Waive field.
   * Was the audit waived?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isWaive();
  
  
  /**
   * Removes the given element from the AuditArray array. This is achieved by marking the element for removal.
   */
  public void removeFromAuditArray(entity.Audit element);
  
  
  /**
   * Removes the given element from the AuditArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAuditArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ActualAuditMethod field.
   */
  public void setActualAuditMethod(typekey.AuditMethod value);
  
  
  /**
   * Sets the value of the Audit field.
   */
  public void setAudit(entity.Audit value);
  
  
  /**
   * Sets the value of the AuditArray field.
   */
  public void setAuditArray(entity.Audit[] value);
  
  
  /**
   * Sets the value of the AuditFee field.
   */
  public void setAuditFee(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the AuditFee_amt field.
   */
  public void setAuditFee_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the AuditFee_cur field.
   */
  public void setAuditFee_cur(typekey.Currency value);
  
  
  public void setAuditID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the AuditMethod field.
   */
  public void setAuditMethod(typekey.AuditMethod value);
  
  
  /**
   * Sets the value of the AuditPeriodEndDate field.
   */
  public void setAuditPeriodEndDate(java.util.Date value);
  
  
  /**
   * Sets the value of the AuditPeriodStartDate field.
   */
  public void setAuditPeriodStartDate(java.util.Date value);
  
  
  /**
   * Sets the value of the AuditScheduleType field.
   */
  public void setAuditScheduleType(typekey.AuditScheduleType value);
  
  
  /**
   * Sets the value of the DueDate field.
   */
  public void setDueDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Escalated field.
   */
  public void setEscalated(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the FirstEscalationPrompt field.
   */
  public void setFirstEscalationPrompt(typekey.AuditEscalationPromptType value);
  
  
  /**
   * Sets the value of the InitDate field.
   */
  public void setInitDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Instructions field.
   */
  public void setInstructions(java.lang.String value);
  
  
  /**
   * Sets the value of the NumDaysAfterFirstEscalation field.
   */
  public void setNumDaysAfterFirstEscalation(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NumDaysAfterSecondEscalation field.
   */
  public void setNumDaysAfterSecondEscalation(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value);
  
  
  public void setPolicyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyTerm field.
   */
  public void setPolicyTerm(entity.PolicyTerm value);
  
  
  public void setPolicyTermID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ReceivedDate field.
   */
  public void setReceivedDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ReversalDate field.
   */
  public void setReversalDate(java.util.Date value);
  
  
  /**
   * Sets the value of the RevisionType field.
   */
  public void setRevisionType(typekey.RevisionType value);
  
  
  /**
   * Sets the value of the SecondEscalationPrompt field.
   */
  public void setSecondEscalationPrompt(typekey.AuditEscalationPromptType value);
  
  
  /**
   * Sets the value of the Series field.
   */
  public void setSeries(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Waive field.
   */
  public void setWaive(java.lang.Boolean value);
  
  
  
}