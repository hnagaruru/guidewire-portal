package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RiskEvaluationWorkItem.eti;RiskEvaluationWorkItem.eix;RiskEvaluationWorkItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RiskEvaluationWorkItemInternal extends com.guidewire._generated.entity.KeyableBeanInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire._generated.entity.WorkItemInternal {
  /**
   * Gets the value of the PolicyPeriod field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Gets the value of the RequestingUser field.
   * If set, this user will get a notification when work item finishes.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getRequestingUser();
  
  
  public gw.pl.persistence.core.Key getRequestingUserID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RiskEvaluationWorkItem getSubtype();
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RequestingUser field.
   */
  public void setRequestingUser(entity.User value);
  
  
  public void setRequestingUserID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.RiskEvaluationWorkItem value);
  
  
  
}