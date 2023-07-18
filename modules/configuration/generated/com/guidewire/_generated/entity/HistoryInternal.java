package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "History.eti;History.eix;History.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HistoryInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire.pc.domain.history.impl.HistoryCoreExtMethods {
  /**
   * Gets the value of the Account field.
   * Account associated to the history entry
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount();
  
  
  public gw.pl.persistence.core.Key getAccountID();
  
  
  /**
   * Gets the value of the Contact field.
   * Contact (if any) associated to the history entry.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contact getContact();
  
  
  public gw.pl.persistence.core.Key getContactID();
  
  
  /**
   * Gets the value of the CustomType field.
   * Customer-defined history event type. This is used to support rules that execute only once per claim.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CustomHistoryType getCustomType();
  
  
  /**
   * Gets the value of the Description field.
   * Description of the history event.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the EventTimestamp field.
   * Timestamp when the event occurred.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEventTimestamp();
  
  
  /**
   * Gets the value of the Job field.
   * Job (if any) that generated the history entry
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob();
  
  
  public gw.pl.persistence.core.Key getJobID();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the NewValue field.
   * New value of an attribute whose change is captured by this history event.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNewValue();
  
  
  /**
   * Gets the value of the OriginalValue field.
   * Original value of an attribute whose change is captured by this history event.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOriginalValue();
  
  
  /**
   * Gets the value of the Policy field.
   * Policy (if any) associated to the history entry.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy();
  
  
  public gw.pl.persistence.core.Key getPolicyID();
  
  
  /**
   * Gets the value of the PolicyPeriod field.
   * Policy period (if any) that generated the history entry
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Gets the value of the PolicyTerm field.
   * Policy term (if any) associated to the history entry.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyTerm getPolicyTerm();
  
  
  public gw.pl.persistence.core.Key getPolicyTermID();
  
  
  /**
   * Gets the value of the RuleUID field.
   * The unique id of the rule that caused this history event to be created. Optional.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRuleUID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.History getSubtype();
  
  
  /**
   * Gets the value of the Type field.
   * Type of claim or exposure event.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HistoryType getType();
  
  
  /**
   * Gets the value of the User field.
   * User who created this history event. Optional.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUser();
  
  
  public gw.pl.persistence.core.Key getUserID();
  
  
  /**
   * Sets the value of the Account field.
   */
  public void setAccount(entity.Account value);
  
  
  public void setAccountID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Contact field.
   */
  public void setContact(entity.Contact value);
  
  
  public void setContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CustomType field.
   */
  public void setCustomType(typekey.CustomHistoryType value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the EventTimestamp field.
   */
  public void setEventTimestamp(java.util.Date value);
  
  
  /**
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value);
  
  
  public void setJobID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the NewValue field.
   */
  public void setNewValue(java.lang.String value);
  
  
  /**
   * Sets the value of the OriginalValue field.
   */
  public void setOriginalValue(java.lang.String value);
  
  
  /**
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value);
  
  
  public void setPolicyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyTerm field.
   */
  public void setPolicyTerm(entity.PolicyTerm value);
  
  
  public void setPolicyTermID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RuleUID field.
   */
  public void setRuleUID(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.History value);
  
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.HistoryType value);
  
  
  /**
   * Sets the value of the User field.
   */
  public void setUser(entity.User value);
  
  
  public void setUserID(gw.pl.persistence.core.Key value);
  
  
  
}