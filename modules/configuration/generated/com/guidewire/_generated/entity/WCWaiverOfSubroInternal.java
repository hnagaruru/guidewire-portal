package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCWaiverOfSubro.eti;WCWaiverOfSubro.eix;WCWaiverOfSubro.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCWaiverOfSubroInternal extends com.guidewire._generated.entity.EffDatedInternal, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCWaiverOfSubro getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BasisAmount field.
   * Basis Amount
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBasisAmount();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the ClassCode field.
   * Class Code of covered employees
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCClassCode getClassCode();
  
  
  public gw.pl.persistence.core.Key getClassCodeID();
  
  
  /**
   * Gets the value of the Description field.
   * Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCWaiverOfSubro getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the JobID field.
   * The job identifier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getJobID();
  
  
  /**
   * Gets the value of the NumEmployees field.
   * Number of employees
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumEmployees();
  
  
  /**
   * Gets the value of the SpecialCov field.
   * Special Coverage Class for this set of employees
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SpecialCov getSpecialCov();
  
  
  /**
   * Gets the value of the State field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getState();
  
  
  /**
   * Gets the value of the Type field.
   * The type of waiver of subro.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.WaiverOfSubrogationType getType();
  
  
  /**
   * Gets the value of the WCLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorkersCompLine getWCLine();
  
  
  public gw.pl.persistence.core.Key getWCLineID();
  
  
  /**
   * Gets the value of the IfAnyExposure field.
   * Option to indicate that coverage is provided with precise liability to be determined later (at audit)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIfAnyExposure();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.WCWaiverOfSubro value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BasisAmount field.
   */
  public void setBasisAmount(java.lang.Integer value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ClassCode field.
   */
  public void setClassCode(entity.WCClassCode value);
  
  
  public void setClassCodeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.WCWaiverOfSubro value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the IfAnyExposure field.
   */
  public void setIfAnyExposure(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the JobID field.
   */
  public void setJobID(java.lang.String value);
  
  
  /**
   * Sets the value of the NumEmployees field.
   */
  public void setNumEmployees(java.lang.Integer value);
  
  
  /**
   * Sets the value of the SpecialCov field.
   */
  public void setSpecialCov(typekey.SpecialCov value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.WaiverOfSubrogationType value);
  
  
  /**
   * Sets the value of the WCLine field.
   */
  public void setWCLine(entity.WorkersCompLine value);
  
  
  public void setWCLineID(gw.pl.persistence.core.Key value);
  
  
  
}