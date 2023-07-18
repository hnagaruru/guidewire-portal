package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GeneralLiabilityExcl.eti;GeneralLiabilityExcl.eix;GeneralLiabilityExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GeneralLiabilityExclInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ExclusionInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ExclusionAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GeneralLiabilityExcl getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the ChoiceTerm1 field.
   * choice cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm1();
  
  
  /**
   * Gets the value of the ChoiceTerm2 field.
   * choice cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm2();
  
  
  /**
   * Gets the value of the DateTerm1 field.
   * datetime cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateTerm1();
  
  
  /**
   * Gets the value of the DateTerm2 field.
   * datetime cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateTerm2();
  
  
  /**
   * Gets the value of the DirectTerm1 field.
   * direct cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDirectTerm1();
  
  
  /**
   * Gets the value of the DirectTerm2 field.
   * direct cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDirectTerm2();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GeneralLiabilityExcl getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GLLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GeneralLiabilityLine getGLLine();
  
  
  public gw.pl.persistence.core.Key getGLLineID();
  
  
  /**
   * Gets the value of the StringTerm1 field.
   * string cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringTerm1();
  
  
  /**
   * Gets the value of the StringTerm2 field.
   * string cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringTerm2();
  
  
  /**
   * Gets the value of the StringTerm3 field.
   * string cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringTerm3();
  
  
  /**
   * Gets the value of the StringTerm4 field.
   * string cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringTerm4();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GeneralLiabilityExcl getSubtype();
  
  
  /**
   * Gets the value of the BooleanTerm1 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm1();
  
  
  /**
   * Gets the value of the BooleanTerm1Avl field.
   * whether or not the BooleanTerm1 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm1Avl();
  
  
  /**
   * Gets the value of the BooleanTerm2 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm2();
  
  
  /**
   * Gets the value of the BooleanTerm2Avl field.
   * whether or not the BooleanTerm2 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm2Avl();
  
  
  /**
   * Gets the value of the BooleanTerm3 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm3();
  
  
  /**
   * Gets the value of the BooleanTerm3Avl field.
   * whether or not the BooleanTerm3 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm3Avl();
  
  
  /**
   * Gets the value of the BooleanTerm4 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm4();
  
  
  /**
   * Gets the value of the BooleanTerm4Avl field.
   * whether or not the BooleanTerm4 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm4Avl();
  
  
  /**
   * Gets the value of the ChoiceTerm1Avl field.
   * whether or not the ChoiceTerm1 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm1Avl();
  
  
  /**
   * Gets the value of the ChoiceTerm2Avl field.
   * whether or not the ChoiceTerm2 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm2Avl();
  
  
  /**
   * Gets the value of the DateTerm1Avl field.
   * whether or not the DateTerm1 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDateTerm1Avl();
  
  
  /**
   * Gets the value of the DateTerm2Avl field.
   * whether or not the DateTerm2 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDateTerm2Avl();
  
  
  /**
   * Gets the value of the DirectTerm1Avl field.
   * whether or not the DirectTerm1 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDirectTerm1Avl();
  
  
  /**
   * Gets the value of the DirectTerm2Avl field.
   * whether or not the DirectTerm2 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDirectTerm2Avl();
  
  
  /**
   * Gets the value of the StringTerm1Avl field.
   * whether or not the StringTerm1 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isStringTerm1Avl();
  
  
  /**
   * Gets the value of the StringTerm2Avl field.
   * whether or not the StringTerm2 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isStringTerm2Avl();
  
  
  /**
   * Gets the value of the StringTerm3Avl field.
   * whether or not the StringTerm3 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isStringTerm3Avl();
  
  
  /**
   * Gets the value of the StringTerm4Avl field.
   * whether or not the StringTerm4 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isStringTerm4Avl();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GeneralLiabilityExcl value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BooleanTerm1 field.
   */
  public void setBooleanTerm1(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm1Avl field.
   */
  public void setBooleanTerm1Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm2 field.
   */
  public void setBooleanTerm2(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm2Avl field.
   */
  public void setBooleanTerm2Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm3 field.
   */
  public void setBooleanTerm3(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm3Avl field.
   */
  public void setBooleanTerm3Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm4 field.
   */
  public void setBooleanTerm4(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm4Avl field.
   */
  public void setBooleanTerm4Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ChoiceTerm1 field.
   */
  public void setChoiceTerm1(java.lang.String value);
  
  
  /**
   * Sets the value of the ChoiceTerm1Avl field.
   */
  public void setChoiceTerm1Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ChoiceTerm2 field.
   */
  public void setChoiceTerm2(java.lang.String value);
  
  
  /**
   * Sets the value of the ChoiceTerm2Avl field.
   */
  public void setChoiceTerm2Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DateTerm1 field.
   */
  public void setDateTerm1(java.util.Date value);
  
  
  /**
   * Sets the value of the DateTerm1Avl field.
   */
  public void setDateTerm1Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DateTerm2 field.
   */
  public void setDateTerm2(java.util.Date value);
  
  
  /**
   * Sets the value of the DateTerm2Avl field.
   */
  public void setDateTerm2Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DirectTerm1 field.
   */
  public void setDirectTerm1(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DirectTerm1Avl field.
   */
  public void setDirectTerm1Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DirectTerm2 field.
   */
  public void setDirectTerm2(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DirectTerm2Avl field.
   */
  public void setDirectTerm2Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GeneralLiabilityExcl value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GLLine field.
   */
  public void setGLLine(entity.GeneralLiabilityLine value);
  
  
  public void setGLLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the StringTerm1 field.
   */
  public void setStringTerm1(java.lang.String value);
  
  
  /**
   * Sets the value of the StringTerm1Avl field.
   */
  public void setStringTerm1Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the StringTerm2 field.
   */
  public void setStringTerm2(java.lang.String value);
  
  
  /**
   * Sets the value of the StringTerm2Avl field.
   */
  public void setStringTerm2Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the StringTerm3 field.
   */
  public void setStringTerm3(java.lang.String value);
  
  
  /**
   * Sets the value of the StringTerm3Avl field.
   */
  public void setStringTerm3Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the StringTerm4 field.
   */
  public void setStringTerm4(java.lang.String value);
  
  
  /**
   * Sets the value of the StringTerm4Avl field.
   */
  public void setStringTerm4Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GeneralLiabilityExcl value);
  
  
  
}