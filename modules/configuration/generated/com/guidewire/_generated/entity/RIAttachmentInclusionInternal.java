package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RIAttachmentInclusion.eti;RIAttachmentInclusion.eix;RIAttachmentInclusion.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RIAttachmentInclusionInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the Agreement field.
   * The attached reinsurance agreement
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIAgreement getAgreement();
  
  
  public gw.pl.persistence.core.Key getAgreementID();
  
  
  /**
   * Gets the value of the DraftRiskVersionList field.
   * The associated RIRiskVersionList, was previously null if the job had been promoted to represent the active inclusion status.  Should never be null
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIRiskVersionList getDraftRiskVersionList();
  
  
  public gw.pl.persistence.core.Key getDraftRiskVersionListID();
  
  
  /**
   * Gets the value of the Inclusion field.
   * Inclusion status of attachment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RIAttachmentInclusionType getInclusion();
  
  
  /**
   * Gets the value of the PolicyTerm field.
   * Policy term information associated with this attachment inclusion
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyTerm getPolicyTerm();
  
  
  public gw.pl.persistence.core.Key getPolicyTermID();
  
  
  /**
   * Gets the value of the RiskNumber field.
   * The risk that is excluded/accepted from the agreement.  This will be the same as the DraftRiskVersionList's risk.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRiskNumber();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RIAttachmentInclusion getSubtype();
  
  
  /**
   * Sets the value of the Agreement field.
   */
  public void setAgreement(entity.RIAgreement value);
  
  
  public void setAgreementID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DraftRiskVersionList field.
   */
  public void setDraftRiskVersionList(entity.RIRiskVersionList value);
  
  
  public void setDraftRiskVersionListID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Inclusion field.
   */
  public void setInclusion(typekey.RIAttachmentInclusionType value);
  
  
  /**
   * Sets the value of the PolicyTerm field.
   */
  public void setPolicyTerm(entity.PolicyTerm value);
  
  
  public void setPolicyTermID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RiskNumber field.
   */
  public void setRiskNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.RIAttachmentInclusion value);
  
  
  
}