package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPLocationAnswer.eti;BOPLocationAnswer.eix;BOPLocationAnswer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BOPLocationAnswerInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.PCAnswerDelegateInternal {
  /**
   * Gets the value of the BOPLocation field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPLocation getBOPLocation();
  
  
  public gw.pl.persistence.core.Key getBOPLocationID();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPLocationAnswer getBasedOnValue();
  
  
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
  public entity.BOPLocationAnswer getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Sets the value of the BOPLocation field.
   */
  public void setBOPLocation(entity.BOPLocation value);
  
  
  public void setBOPLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.BOPLocationAnswer value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.BOPLocationAnswer value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  
}