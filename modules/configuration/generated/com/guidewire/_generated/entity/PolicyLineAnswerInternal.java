package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyLineAnswer.eti;PolicyLineAnswer.eix;PolicyLineAnswer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyLineAnswerInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.PCAnswerDelegateInternal, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLineAnswer getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLineAnswer getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the PolicyLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLine getPolicyLine();
  
  
  public gw.pl.persistence.core.Key getPolicyLineID();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.PolicyLineAnswer value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.PolicyLineAnswer value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyLine field.
   */
  public void setPolicyLine(entity.PolicyLine value);
  
  
  public void setPolicyLineID(gw.pl.persistence.core.Key value);
  
  
  
}