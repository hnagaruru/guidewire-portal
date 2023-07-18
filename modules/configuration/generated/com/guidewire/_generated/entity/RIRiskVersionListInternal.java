package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RIRiskVersionList.eti;RIRiskVersionList.eix;RIRiskVersionList.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RIRiskVersionListInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods, com.guidewire.pc.domain.reinsurance.impl.RIRiskVersionListInternalMethods, com.guidewire.pl.system.bundle.InsertCallback, com.guidewire.pl.system.bundle.UpdateCallback {
  /**
   * Adds the given element to the AllVersionsInternal array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAllVersionsInternal(entity.RIRisk element);
  
  
  /**
   * Adds the given element to the AttachmentInclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAttachmentInclusions(entity.RIAttachmentInclusion element);
  
  
  /**
   * Gets the value of the AllVersionsInternal field.
   * All versions of the RIRisk.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIRisk[] getAllVersionsInternal();
  
  
  /**
   * Gets the value of the AttachmentInclusions field.
   * The exclusions/special acceptances for attached risks.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIAttachmentInclusion[] getAttachmentInclusions();
  
  
  /**
   * Gets the value of the CancellationDate field.
   * The cancellation date.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCancellationDate();
  
  
  /**
   * Gets the value of the Container field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIRiskVLContainer getContainer();
  
  
  public gw.pl.persistence.core.Key getContainerID();
  
  
  /**
   * Gets the value of the EditEffectiveDate field.
   * Effective date of this change.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEditEffectiveDate();
  
  
  /**
   * Gets the value of the PolicyPeriod field.
   * Associated Policy Period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Gets the value of the RiskNumber field.
   * The risk number.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRiskNumber();
  
  
  /**
   * Gets the value of the Status field.
   * The status of the effdated entity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RIEffDatedStatus getStatus();
  
  
  /**
   * Removes the given element from the AllVersionsInternal array. This is achieved by marking the element for removal.
   */
  public void removeFromAllVersionsInternal(entity.RIRisk element);
  
  
  /**
   * Removes the given element from the AllVersionsInternal array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAllVersionsInternal(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the AttachmentInclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromAttachmentInclusions(entity.RIAttachmentInclusion element);
  
  
  /**
   * Removes the given element from the AttachmentInclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAttachmentInclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AllVersionsInternal field.
   */
  public void setAllVersionsInternal(entity.RIRisk[] value);
  
  
  /**
   * Sets the value of the AttachmentInclusions field.
   */
  public void setAttachmentInclusions(entity.RIAttachmentInclusion[] value);
  
  
  /**
   * Sets the value of the CancellationDate field.
   */
  public void setCancellationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Container field.
   */
  public void setContainer(entity.RIRiskVLContainer value);
  
  
  public void setContainerID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the EditEffectiveDate field.
   */
  public void setEditEffectiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RiskNumber field.
   */
  public void setRiskNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.RIEffDatedStatus value);
  
  
  
}