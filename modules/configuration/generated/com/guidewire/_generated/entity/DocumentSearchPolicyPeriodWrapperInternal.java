package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DocumentSearchPolicyPeriodWrapper.eti;DocumentSearchPolicyPeriodWrapper.eix;DocumentSearchPolicyPeriodWrapper.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface DocumentSearchPolicyPeriodWrapperInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the DocumentSearchCriteria field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DocumentSearchCriteria getDocumentSearchCriteria();
  
  
  public gw.pl.persistence.core.Key getDocumentSearchCriteriaID();
  
  
  /**
   * Gets the value of the PolicyPeriod field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Sets the value of the DocumentSearchCriteria field.
   */
  public void setDocumentSearchCriteria(entity.DocumentSearchCriteria value);
  
  
  public void setDocumentSearchCriteriaID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  
}