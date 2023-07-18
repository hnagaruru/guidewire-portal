package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RIAgreement.eti;RIAgreement.eix;RIAgreement.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RIAgreementInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RIContractInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods, com.guidewire.pc.domain.reinsurance.impl.RIAgreementInternalMethods, gw.api.contact.ContactOwner, gw.api.domain.reinsurance.RICoverageGroupOwner, gw.api.reinsurance.CedingRecipient {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RIAGREEMENTADDED_EVENT = "RIAgreementAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RIAGREEMENTCHANGED_EVENT = "RIAgreementChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RIAGREEMENTREMOVED_EVENT = "RIAgreementRemoved";
  
  /**
   * Adds the given element to the AttachmentInclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAttachmentInclusions(entity.RIAttachmentInclusion element);
  
  
  /**
   * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToName_L10N_ARRAY(entity.RIAgreement_Name_L10N element);
  
  
  /**
   * Adds the given element to the Participants array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToParticipants(entity.AgreementParticipant element);
  
  
  /**
   * Adds the given element to the Programs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPrograms(entity.ProgramTreaty element);
  
  
  /**
   * Adds the given element to the RICoverageGroups array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRICoverageGroups(entity.AgreementCoverageGroup element);
  
  
  /**
   * Gets the value of the AgreementNumber field.
   * The agreement number of this agreement.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAgreementNumber();
  
  
  /**
   * Gets the value of the AmountOfCoverage field.
   * Defines the maximum amount that could be recovered from the agreement.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getAmountOfCoverage();
  
  
  /**
   * Gets the value of the AmountOfCoverage_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getAmountOfCoverage_amt();
  
  
  /**
   * Gets the value of the AmountOfCoverage_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getAmountOfCoverage_cur();
  
  
  /**
   * Gets the value of the AttachmentInclusions field.
   * The exclusions/special acceptances for attached risks.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIAttachmentInclusion[] getAttachmentInclusions();
  
  
  /**
   * Gets the value of the AttachmentPoint field.
   * Defines the lower limit of when coverage starts. For Surplus, this is the lower limit assuming the maximum retention. Not relevant for Quota Share or Proportional Facultative
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getAttachmentPoint();
  
  
  /**
   * Gets the value of the AttachmentPoint_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getAttachmentPoint_amt();
  
  
  /**
   * Gets the value of the AttachmentPoint_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getAttachmentPoint_cur();
  
  
  /**
   * Gets the value of the Broker field.
   * Defines which broker (if any) helped arrange this agreement.  Useful because communications for collections, payments, etc. may be routed through the broker rather than directly to the reinsurers.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contact getBroker();
  
  
  public gw.pl.persistence.core.Key getBrokerID();
  
  
  /**
   * Gets the value of the CededShare field.
   * Defines percentage ceded to the reinsurer.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCededShare();
  
  
  /**
   * Gets the value of the Comments field.
   * A free form note space for the carrier to note any additional terms that are not used by the system but which are important to document to fully describe the agreement.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getComments();
  
  
  /**
   * Gets the value of the Commission field.
   * This is the commission that the carrier will earn from the reinsurers for sending them RI business.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCommission();
  
  
  /**
   * Gets the value of the ContactPublicID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContactPublicID();
  
  
  /**
   * Gets the value of the CoverageLimit field.
   * Defines the upper bound on when coverage stops. Not relevant for Proportional Facultative.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getCoverageLimit();
  
  
  /**
   * Gets the value of the CoverageLimit_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCoverageLimit_amt();
  
  
  /**
   * Gets the value of the CoverageLimit_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCoverageLimit_cur();
  
  
  /**
   * Gets the value of the Name field.
   * The name of this contract.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Name_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIAgreement_Name_L10N[] getName_L10N_ARRAY();
  
  
  /**
   * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
   */
  public entity.RIAgreement_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Participants field.
   * All reinsurers participate in this agreement.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AgreementParticipant[] getParticipants();
  
  
  /**
   * Gets the value of the PayableBasis field.
   * Payable Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PayableBasisType getPayableBasis();
  
  
  /**
   * Gets the value of the Programs field.
   * All reinsurance programs which include this agreement.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProgramTreaty[] getPrograms();
  
  
  /**
   * Gets the value of the RICoverageGroups field.
   * All RI coverage groups this agreement applies to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AgreementCoverageGroup[] getRICoverageGroups();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RIAgreement getSubtype();
  
  
  /**
   * Gets the value of the CommissionAdjusted field.
   * True if commission is adjusted for each participant.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCommissionAdjusted();
  
  
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
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromName_L10N_ARRAY(entity.RIAgreement_Name_L10N element);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Participants array. This is achieved by marking the element for removal.
   */
  public void removeFromParticipants(entity.AgreementParticipant element);
  
  
  /**
   * Removes the given element from the Participants array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromParticipants(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Programs array. This is achieved by marking the element for removal.
   */
  public void removeFromPrograms(entity.ProgramTreaty element);
  
  
  /**
   * Removes the given element from the Programs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPrograms(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RICoverageGroups array. This is achieved by marking the element for removal.
   */
  public void removeFromRICoverageGroups(entity.AgreementCoverageGroup element);
  
  
  /**
   * Removes the given element from the RICoverageGroups array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRICoverageGroups(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AgreementNumber field.
   */
  public void setAgreementNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the AmountOfCoverage field.
   */
  public void setAmountOfCoverage(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the AmountOfCoverage_amt field.
   */
  public void setAmountOfCoverage_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the AmountOfCoverage_cur field.
   */
  public void setAmountOfCoverage_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the AttachmentInclusions field.
   */
  public void setAttachmentInclusions(entity.RIAttachmentInclusion[] value);
  
  
  /**
   * Sets the value of the AttachmentPoint field.
   */
  public void setAttachmentPoint(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the AttachmentPoint_amt field.
   */
  public void setAttachmentPoint_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the AttachmentPoint_cur field.
   */
  public void setAttachmentPoint_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the Broker field.
   */
  public void setBroker(entity.Contact value);
  
  
  public void setBrokerID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CededShare field.
   */
  public void setCededShare(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Comments field.
   */
  public void setComments(java.lang.String value);
  
  
  /**
   * Sets the value of the Commission field.
   */
  public void setCommission(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the CommissionAdjusted field.
   */
  public void setCommissionAdjusted(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ContactPublicID field.
   */
  public void setContactPublicID(java.lang.String value);
  
  
  /**
   * Sets the value of the CoverageLimit field.
   */
  public void setCoverageLimit(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the CoverageLimit_amt field.
   */
  public void setCoverageLimit_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the CoverageLimit_cur field.
   */
  public void setCoverageLimit_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Name_L10N_ARRAY field.
   */
  public void setName_L10N_ARRAY(entity.RIAgreement_Name_L10N[] value);
  
  
  /**
   * Sets the value of the Participants field.
   */
  public void setParticipants(entity.AgreementParticipant[] value);
  
  
  /**
   * Sets the value of the PayableBasis field.
   */
  public void setPayableBasis(typekey.PayableBasisType value);
  
  
  /**
   * Sets the value of the Programs field.
   */
  public void setPrograms(entity.ProgramTreaty[] value);
  
  
  /**
   * Sets the value of the RICoverageGroups field.
   */
  public void setRICoverageGroups(entity.AgreementCoverageGroup[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.RIAgreement value);
  
  
  
}