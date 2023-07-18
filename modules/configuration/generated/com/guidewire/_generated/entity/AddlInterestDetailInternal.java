package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AddlInterestDetail.eti;AddlInterestDetail.eix;AddlInterestDetail.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AddlInterestDetailInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire.pc.domain.contact.AddlInterestDetailPublicMethods, gw.api.contact.AddlInterestDetailJavaMethods, gw.api.contact.AddlInterestDetailMethods, gw.api.copier.EffDatedCopyable, gw.api.domain.account.Mergeable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the AdditionalInterestType field.
   * Interest type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AdditionalInterestType getAdditionalInterestType();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AddlInterestDetail getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the ContractNumber field.
   * Loan numbers associated with a mortgagee or lender
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContractNumber();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AddlInterestDetail getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the PolicyAddlInterest field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyAddlInterest getPolicyAddlInterest();
  
  
  public gw.pl.persistence.core.Key getPolicyAddlInterestID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AddlInterestDetail getSubtype();
  
  
  /**
   * Gets the value of the CertRequired field.
   * Is a certificate required?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCertRequired();
  
  
  /**
   * Sets the value of the AdditionalInterestType field.
   */
  public void setAdditionalInterestType(typekey.AdditionalInterestType value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.AddlInterestDetail value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CertRequired field.
   */
  public void setCertRequired(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ContractNumber field.
   */
  public void setContractNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.AddlInterestDetail value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyAddlInterest field.
   */
  public void setPolicyAddlInterest(entity.PolicyAddlInterest value);
  
  
  public void setPolicyAddlInterestID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.AddlInterestDetail value);
  
  
  
}