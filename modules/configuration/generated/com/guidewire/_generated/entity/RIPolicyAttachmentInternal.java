package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RIPolicyAttachment.eti;RIPolicyAttachment.eix;RIPolicyAttachment.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RIPolicyAttachmentInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire.pc.domain.reinsurance.RIPolicyAttachmentPublicMethods, gw.api.reinsurance.MergeableAdapter {
  /**
   * Gets the value of the Agreement field.
   * The attached reinsurance agreement
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIAgreement getAgreement();
  
  
  public gw.pl.persistence.core.Key getAgreementID();
  
  
  /**
   * Gets the value of the Program field.
   * The attached reinsurance program
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIProgram getProgram();
  
  
  public gw.pl.persistence.core.Key getProgramID();
  
  
  /**
   * Gets the value of the Risk field.
   * The associated reinsurable risk.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIRisk getRisk();
  
  
  public gw.pl.persistence.core.Key getRiskID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RIPolicyAttachment getSubtype();
  
  
  /**
   * Sets the value of the Agreement field.
   */
  public void setAgreement(entity.RIAgreement value);
  
  
  public void setAgreementID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Program field.
   */
  public void setProgram(entity.RIProgram value);
  
  
  public void setProgramID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Risk field.
   */
  public void setRisk(entity.RIRisk value);
  
  
  public void setRiskID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.RIPolicyAttachment value);
  
  
  
}