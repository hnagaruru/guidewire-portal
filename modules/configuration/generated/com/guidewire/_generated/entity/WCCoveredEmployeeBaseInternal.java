package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCCoveredEmployeeBase.eti;WCCoveredEmployeeBase.eix;WCCoveredEmployeeBase.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCCoveredEmployeeBaseInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.AuditableInternal, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCCoveredEmployeeBase getBasedOnValue();
  
  
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
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCCoveredEmployeeBase getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Location field.
   * Location of covered employees.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getLocation();
  
  
  public gw.pl.persistence.core.Key getLocationID();
  
  
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
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.WCCoveredEmployeeBase getSubtype();
  
  
  /**
   * Gets the value of the WorkersCompLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorkersCompLine getWorkersCompLine();
  
  
  public gw.pl.persistence.core.Key getWorkersCompLineID();
  
  
  /**
   * Gets the value of the IfAnyExposure field.
   * Option to indicate that coverage is provided with precise liability to be determined later (at audit)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIfAnyExposure();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.WCCoveredEmployeeBase value);
  
  
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
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.WCCoveredEmployeeBase value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the IfAnyExposure field.
   */
  public void setIfAnyExposure(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Location field.
   */
  public void setLocation(entity.PolicyLocation value);
  
  
  public void setLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the NumEmployees field.
   */
  public void setNumEmployees(java.lang.Integer value);
  
  
  /**
   * Sets the value of the SpecialCov field.
   */
  public void setSpecialCov(typekey.SpecialCov value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.WCCoveredEmployeeBase value);
  
  
  /**
   * Sets the value of the WorkersCompLine field.
   */
  public void setWorkersCompLine(entity.WorkersCompLine value);
  
  
  public void setWorkersCompLineID(gw.pl.persistence.core.Key value);
  
  
  
}