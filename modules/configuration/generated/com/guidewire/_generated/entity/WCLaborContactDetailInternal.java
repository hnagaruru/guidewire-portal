package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCLaborContactDetail.eti;WCLaborContactDetail.eix;WCLaborContactDetail.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCLaborContactDetailInternal extends com.guidewire._generated.entity.EffDatedInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.account.Mergeable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCLaborContactDetail getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the ContractEffectiveDate field.
   * Effective Date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getContractEffectiveDate();
  
  
  /**
   * Gets the value of the ContractExpirationDate field.
   * Expiration Date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getContractExpirationDate();
  
  
  /**
   * Gets the value of the DescriptionOfDuties field.
   * Description of Duties
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescriptionOfDuties();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCLaborContactDetail getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Inclusion field.
   * Inclusion option. Included or Excluded
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Inclusion getInclusion();
  
  
  /**
   * Gets the value of the NumberOfEmployees field.
   * Number of employees
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumberOfEmployees();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.WCLaborContactDetail getSubtype();
  
  
  /**
   * Gets the value of the WCLaborContact field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCLaborContact getWCLaborContact();
  
  
  public gw.pl.persistence.core.Key getWCLaborContactID();
  
  
  /**
   * Gets the value of the WorkLocation field.
   * The address at which the employees are working
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getWorkLocation();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.WCLaborContactDetail value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ContractEffectiveDate field.
   */
  public void setContractEffectiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ContractExpirationDate field.
   */
  public void setContractExpirationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the DescriptionOfDuties field.
   */
  public void setDescriptionOfDuties(java.lang.String value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.WCLaborContactDetail value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Inclusion field.
   */
  public void setInclusion(typekey.Inclusion value);
  
  
  /**
   * Sets the value of the NumberOfEmployees field.
   */
  public void setNumberOfEmployees(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.WCLaborContactDetail value);
  
  
  /**
   * Sets the value of the WCLaborContact field.
   */
  public void setWCLaborContact(entity.WCLaborContact value);
  
  
  public void setWCLaborContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the WorkLocation field.
   */
  public void setWorkLocation(java.lang.String value);
  
  
  
}