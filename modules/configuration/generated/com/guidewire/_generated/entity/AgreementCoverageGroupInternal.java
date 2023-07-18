package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AgreementCoverageGroup.eti;AgreementCoverageGroup.eix;AgreementCoverageGroup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AgreementCoverageGroupInternal extends com.guidewire._generated.entity.RICoverageGroupInternal {
  /**
   * Gets the value of the Agreement field.
   * The reinsurance agreement this coverage group belong to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIAgreement getAgreement();
  
  
  public gw.pl.persistence.core.Key getAgreementID();
  
  
  /**
   * Sets the value of the Agreement field.
   */
  public void setAgreement(entity.RIAgreement value);
  
  
  public void setAgreementID(gw.pl.persistence.core.Key value);
  
  
  
}