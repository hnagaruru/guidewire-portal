package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RIRisk.eti;RIRisk.eix;RIRisk.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RIRiskInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods, com.guidewire.pc.domain.reinsurance.impl.RIRiskInternalMethods, gw.api.reinsurance.Cedeable, gw.api.reinsurance.MergeableAdapter {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RIRISKADDED_EVENT = "RIRiskAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RIRISKCHANGED_EVENT = "RIRiskChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RIRISKREMOVED_EVENT = "RIRiskRemoved";
  
  /**
   * Adds the given element to the PolicyAttachments array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyAttachments(entity.RIPolicyAttachment element);
  
  
  /**
   * Gets the value of the DefaultRetentionFromProgram field.
   * De Facto Gross Retention in effect when program was attached.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getDefaultRetentionFromProgram();
  
  
  /**
   * Gets the value of the DefaultRetentionFromProgram_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDefaultRetentionFromProgram_amt();
  
  
  /**
   * Gets the value of the DefaultRetentionFromProgram_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getDefaultRetentionFromProgram_cur();
  
  
  /**
   * Gets the value of the GrossRetention field.
   * first layer of risk prior to ceding to any surplus treaty and which would be shared with a quota share treaty
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getGrossRetention();
  
  
  /**
   * Gets the value of the GrossRetention_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getGrossRetention_amt();
  
  
  /**
   * Gets the value of the GrossRetention_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getGrossRetention_cur();
  
  
  /**
   * Gets the value of the LocationRiskGroup field.
   * For grouping location risks. Placed on RIRisk instead of on the effDated LocationGroup so that it can be edited after the policy is locked.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLocationRiskGroup();
  
  
  /**
   * Gets the value of the LossDateAttachmentProgram field.
   * Reinsurance program associated with this RIRisk, as of the RIRisk's slice date.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIProgram getLossDateAttachmentProgram();
  
  
  public gw.pl.persistence.core.Key getLossDateAttachmentProgramID();
  
  
  /**
   * Gets the value of the PolicyAttachmentProgram field.
   * Reinsurance program associated with this RIRisk on the date Policy was issued.   This is applicable for policy-attached reinsurance.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIProgram getPolicyAttachmentProgram();
  
  
  public gw.pl.persistence.core.Key getPolicyAttachmentProgramID();
  
  
  /**
   * Gets the value of the PolicyAttachments field.
   * All reinsurance attachments of this risk.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIPolicyAttachment[] getPolicyAttachments();
  
  
  /**
   * Gets the value of the ProbableMaxLossPct field.
   * Probable Maximum Loss Percentage.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getProbableMaxLossPct();
  
  
  /**
   * Gets the value of the ProbableMaxLossReason field.
   * Probable Maximum Loss Reason.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProbableMaxLossReason();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RIRisk getSubtype();
  
  
  /**
   * Gets the value of the TotalInsuredValue field.
   * Total insured value (property coverage) or sum insured (liability coverage) for the risk.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalInsuredValue();
  
  
  /**
   * Gets the value of the TotalInsuredValue_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalInsuredValue_amt();
  
  
  /**
   * Gets the value of the TotalInsuredValue_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalInsuredValue_cur();
  
  
  /**
   * Gets the value of the VersionList field.
   * The version list of this RIRisk.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIRiskVersionList getVersionList();
  
  
  public gw.pl.persistence.core.Key getVersionListID();
  
  
  /**
   * Removes the given element from the PolicyAttachments array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyAttachments(entity.RIPolicyAttachment element);
  
  
  /**
   * Removes the given element from the PolicyAttachments array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyAttachments(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the DefaultRetentionFromProgram field.
   */
  public void setDefaultRetentionFromProgram(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the DefaultRetentionFromProgram_amt field.
   */
  public void setDefaultRetentionFromProgram_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DefaultRetentionFromProgram_cur field.
   */
  public void setDefaultRetentionFromProgram_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the GrossRetention field.
   */
  public void setGrossRetention(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the GrossRetention_amt field.
   */
  public void setGrossRetention_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the GrossRetention_cur field.
   */
  public void setGrossRetention_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the LocationRiskGroup field.
   */
  public void setLocationRiskGroup(java.lang.String value);
  
  
  /**
   * Sets the value of the LossDateAttachmentProgram field.
   */
  public void setLossDateAttachmentProgram(entity.RIProgram value);
  
  
  public void setLossDateAttachmentProgramID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyAttachmentProgram field.
   */
  public void setPolicyAttachmentProgram(entity.RIProgram value);
  
  
  public void setPolicyAttachmentProgramID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyAttachments field.
   */
  public void setPolicyAttachments(entity.RIPolicyAttachment[] value);
  
  
  /**
   * Sets the value of the ProbableMaxLossPct field.
   */
  public void setProbableMaxLossPct(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ProbableMaxLossReason field.
   */
  public void setProbableMaxLossReason(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.RIRisk value);
  
  
  /**
   * Sets the value of the TotalInsuredValue field.
   */
  public void setTotalInsuredValue(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TotalInsuredValue_amt field.
   */
  public void setTotalInsuredValue_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TotalInsuredValue_cur field.
   */
  public void setTotalInsuredValue_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the VersionList field.
   */
  public void setVersionList(entity.RIRiskVersionList value);
  
  
  public void setVersionListID(gw.pl.persistence.core.Key value);
  
  
  
}