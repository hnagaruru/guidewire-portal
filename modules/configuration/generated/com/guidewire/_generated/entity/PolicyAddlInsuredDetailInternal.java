package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyAddlInsuredDetail.eti;PolicyAddlInsuredDetail.eix;PolicyAddlInsuredDetail.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyAddlInsuredDetailInternal extends com.guidewire._generated.entity.EffDatedInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.account.Mergeable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the AdditionalInformation field.
   * Additional information on this policy additional insured.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAdditionalInformation();
  
  
  /**
   * Gets the value of the AdditionalInsuredType field.
   * Insured Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AdditionalInsuredType getAdditionalInsuredType();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyAddlInsuredDetail getBasedOnValue();
  
  
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
  public entity.PolicyAddlInsuredDetail getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the PolicyAddlInsured field.
   * The policy additional insured this policy additional insured type is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyAddlInsured getPolicyAddlInsured();
  
  
  public gw.pl.persistence.core.Key getPolicyAddlInsuredID();
  
  
  /**
   * Sets the value of the AdditionalInformation field.
   */
  public void setAdditionalInformation(java.lang.String value);
  
  
  /**
   * Sets the value of the AdditionalInsuredType field.
   */
  public void setAdditionalInsuredType(typekey.AdditionalInsuredType value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.PolicyAddlInsuredDetail value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.PolicyAddlInsuredDetail value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyAddlInsured field.
   */
  public void setPolicyAddlInsured(entity.PolicyAddlInsured value);
  
  
  public void setPolicyAddlInsuredID(gw.pl.persistence.core.Key value);
  
  
  
}