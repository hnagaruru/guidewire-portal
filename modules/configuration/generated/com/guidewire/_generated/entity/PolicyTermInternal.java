package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyTerm.eti;PolicyTerm.eix;PolicyTerm.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyTermInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.RootInfoInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire._generated.entity.DestructionRootPinnableInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.personaldata.PinnableDomainMethods, com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods, com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods, gw.api.history.CustomHistory {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYTERMADDED_EVENT = "PolicyTermAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYTERMCHANGED_EVENT = "PolicyTermChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYTERMREMOVED_EVENT = "PolicyTermRemoved";
  
  /**
   * Adds the given element to the AuditInformations array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAuditInformations(entity.AuditInformation element);
  
  
  /**
   * Adds the given element to the HumanTouchedIssues array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHumanTouchedIssues(entity.UWIssueUniqueID element);
  
  
  /**
   * Adds the given element to the Jobs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToJobs(entity.Job element);
  
  
  /**
   * Adds the given element to the NonRenewalExplanations array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToNonRenewalExplanations(entity.NonRenewalExplanation element);
  
  
  /**
   * Adds the given element to the RestoreRequests array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRestoreRequests(entity.PolicyTermRestoreRequest element);
  
  
  /**
   * Adds the given element to the WorksheetContainers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWorksheetContainers(entity.WorksheetContainer element);
  
  
  /**
   * Gets the value of the AffinityGroup field.
   * The affinity group assigned to this term
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AffinityGroup getAffinityGroup();
  
  
  public gw.pl.persistence.core.Key getAffinityGroupID();
  
  
  /**
   * Gets the value of the AuditInformations field.
   * The audits for this policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AuditInformation[] getAuditInformations();
  
  
  /**
   * Gets the value of the ClaimSystemTotalIncurred field.
   * Total Incurred Amount retrieved from Claim system for Loss Ratio calculation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getClaimSystemTotalIncurred();
  
  
  /**
   * Gets the value of the ClaimSystemTotalIncurred_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getClaimSystemTotalIncurred_amt();
  
  
  /**
   * Gets the value of the ClaimSystemTotalIncurred_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getClaimSystemTotalIncurred_cur();
  
  
  /**
   * Gets the value of the DaysReported field.
   * The number of days for which the total reported premium applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getDaysReported();
  
  
  /**
   * Gets the value of the DepositAmount field.
   * The current deposit amount of the policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getDepositAmount();
  
  
  /**
   * Gets the value of the DepositAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDepositAmount_amt();
  
  
  /**
   * Gets the value of the DepositAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getDepositAmount_cur();
  
  
  /**
   * Gets the value of the FinalAuditOption field.
   * When false, final audit not scheduled; when true, the underwriter forces the audit to be scheduled and started; otherwise, final audit is scheduled, and rules determine whether to start it.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FinalAuditOption getFinalAuditOption();
  
  
  /**
   * Gets the value of the HumanTouchedIssues field.
   * The issues on which have had manual actions have been performed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssueUniqueID[] getHumanTouchedIssues();
  
  
  /**
   * Gets the value of the Jobs field.
   * Jobs that are part of this PolicyTerm
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job[] getJobs();
  
  
  /**
   * Gets the value of the LastRestoreDate field.
   * The date when one or more PolicyPeriod from this PolicyTerm was last retrieved from the archive
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastRestoreDate();
  
  
  /**
   * Gets the value of the LossRatioCalculationDate field.
   * Date of the most recent Loss Ratio calculation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLossRatioCalculationDate();
  
  
  /**
   * Gets the value of the LossRatioEarnedPremium field.
   * Earned Premium used for Loss Ratio calculation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getLossRatioEarnedPremium();
  
  
  /**
   * Gets the value of the LossRatioEarnedPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getLossRatioEarnedPremium_amt();
  
  
  /**
   * Gets the value of the LossRatioEarnedPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getLossRatioEarnedPremium_cur();
  
  
  /**
   * Gets the value of the NextArchiveCheckDate field.
   * The date to next evaluate this PolicyTerm for archiving or null if archiving should be checked at the next opportunity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getNextArchiveCheckDate();
  
  
  /**
   * Gets the value of the NextRenewalCheckDate field.
   * The date to next evaluate this PolicyTerm for renewal, null indicates to check at the next opportunity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getNextRenewalCheckDate();
  
  
  /**
   * Gets the value of the NonRenewAddExplanation field.
   * Additional explanation why this policy marked for non renewal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNonRenewAddExplanation();
  
  
  /**
   * Gets the value of the NonRenewReason field.
   * Classifies the reason that the policy is marked as non-renew
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NonRenewalCode getNonRenewReason();
  
  
  /**
   * Gets the value of the NonRenewalExplanations field.
   * Non-renewal explanations
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.NonRenewalExplanation[] getNonRenewalExplanations();
  
  
  /**
   * Gets the value of the Policy field.
   * The policy that this term applies to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy();
  
  
  public gw.pl.persistence.core.Key getPolicyID();
  
  
  /**
   * Gets the value of the PolicyTermArchiveState field.
   * Combined archive state of the policy periods in the policy term.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PolicyTermArchiveState getPolicyTermArchiveState();
  
  
  /**
   * Gets the value of the PreRenewalDirection field.
   * Indicates the pre-renewal direction,if any, of this policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PreRenewalDirection getPreRenewalDirection();
  
  
  /**
   * Gets the value of the RestoreRequests field.
   * Requests that have been made to retrieve this term from the Archive
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyTermRestoreRequest[] getRestoreRequests();
  
  
  /**
   * Gets the value of the TotalEstimatedPremium field.
   * The amount of premium estimated for this policy period
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalEstimatedPremium();
  
  
  /**
   * Gets the value of the TotalEstimatedPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalEstimatedPremium_amt();
  
  
  /**
   * Gets the value of the TotalEstimatedPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalEstimatedPremium_cur();
  
  
  /**
   * Gets the value of the TotalReportedPremium field.
   * The amount of premium reported for this policy period
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalReportedPremium();
  
  
  /**
   * Gets the value of the TotalReportedPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalReportedPremium_amt();
  
  
  /**
   * Gets the value of the TotalReportedPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalReportedPremium_cur();
  
  
  /**
   * Gets the value of the WorksheetContainers field.
   * WorksheetContainer objects on each period in the PolicyTerm
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorksheetContainer[] getWorksheetContainers();
  
  
  /**
   * Gets the value of the Bound field.
   * True on promoting Submission, Rewrite and for Renewal if current mode is not 'Confirm Renewals'.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBound();
  
  
  /**
   * Gets the value of the DepositReleased field.
   * True if the deposit amount has been released
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDepositReleased();
  
  
  /**
   * Gets the value of the GenerateReinsurables field.
   * Flag for generating reinsurables for reinsurance
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isGenerateReinsurables();
  
  
  /**
   * Gets the value of the MostRecentTerm field.
   * Flags the future-most term for a policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isMostRecentTerm();
  
  
  /**
   * Removes the given element from the AuditInformations array. This is achieved by marking the element for removal.
   */
  public void removeFromAuditInformations(entity.AuditInformation element);
  
  
  /**
   * Removes the given element from the AuditInformations array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAuditInformations(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the HumanTouchedIssues array. This is achieved by marking the element for removal.
   */
  public void removeFromHumanTouchedIssues(entity.UWIssueUniqueID element);
  
  
  /**
   * Removes the given element from the HumanTouchedIssues array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHumanTouchedIssues(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Jobs array. This is achieved by marking the element for removal.
   */
  public void removeFromJobs(entity.Job element);
  
  
  /**
   * Removes the given element from the Jobs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromJobs(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the NonRenewalExplanations array. This is achieved by marking the element for removal.
   */
  public void removeFromNonRenewalExplanations(entity.NonRenewalExplanation element);
  
  
  /**
   * Removes the given element from the NonRenewalExplanations array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromNonRenewalExplanations(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RestoreRequests array. This is achieved by marking the element for removal.
   */
  public void removeFromRestoreRequests(entity.PolicyTermRestoreRequest element);
  
  
  /**
   * Removes the given element from the RestoreRequests array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRestoreRequests(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the WorksheetContainers array. This is achieved by marking the element for removal.
   */
  public void removeFromWorksheetContainers(entity.WorksheetContainer element);
  
  
  /**
   * Removes the given element from the WorksheetContainers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWorksheetContainers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AffinityGroup field.
   */
  public void setAffinityGroup(entity.AffinityGroup value);
  
  
  public void setAffinityGroupID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the AuditInformations field.
   */
  public void setAuditInformations(entity.AuditInformation[] value);
  
  
  /**
   * Sets the value of the Bound field.
   */
  public void setBound(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ClaimSystemTotalIncurred field.
   */
  public void setClaimSystemTotalIncurred(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the ClaimSystemTotalIncurred_amt field.
   */
  public void setClaimSystemTotalIncurred_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ClaimSystemTotalIncurred_cur field.
   */
  public void setClaimSystemTotalIncurred_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the DaysReported field.
   */
  public void setDaysReported(java.lang.Integer value);
  
  
  /**
   * Sets the value of the DepositAmount field.
   */
  public void setDepositAmount(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the DepositAmount_amt field.
   */
  public void setDepositAmount_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DepositAmount_cur field.
   */
  public void setDepositAmount_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the DepositReleased field.
   */
  public void setDepositReleased(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the FinalAuditOption field.
   */
  public void setFinalAuditOption(typekey.FinalAuditOption value);
  
  
  /**
   * Sets the value of the GenerateReinsurables field.
   */
  public void setGenerateReinsurables(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the HumanTouchedIssues field.
   */
  public void setHumanTouchedIssues(entity.UWIssueUniqueID[] value);
  
  
  /**
   * Sets the value of the Jobs field.
   */
  public void setJobs(entity.Job[] value);
  
  
  /**
   * Sets the value of the LastRestoreDate field.
   */
  public void setLastRestoreDate(java.util.Date value);
  
  
  /**
   * Sets the value of the LossRatioCalculationDate field.
   */
  public void setLossRatioCalculationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the LossRatioEarnedPremium field.
   */
  public void setLossRatioEarnedPremium(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the LossRatioEarnedPremium_amt field.
   */
  public void setLossRatioEarnedPremium_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the LossRatioEarnedPremium_cur field.
   */
  public void setLossRatioEarnedPremium_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the MostRecentTerm field.
   */
  public void setMostRecentTerm(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the NextArchiveCheckDate field.
   */
  public void setNextArchiveCheckDate(java.util.Date value);
  
  
  /**
   * Sets the value of the NextRenewalCheckDate field.
   */
  public void setNextRenewalCheckDate(java.util.Date value);
  
  
  /**
   * Sets the value of the NonRenewAddExplanation field.
   */
  public void setNonRenewAddExplanation(java.lang.String value);
  
  
  /**
   * Sets the value of the NonRenewReason field.
   */
  public void setNonRenewReason(typekey.NonRenewalCode value);
  
  
  /**
   * Sets the value of the NonRenewalExplanations field.
   */
  public void setNonRenewalExplanations(entity.NonRenewalExplanation[] value);
  
  
  /**
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value);
  
  
  public void setPolicyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyTermArchiveState field.
   */
  public void setPolicyTermArchiveState(typekey.PolicyTermArchiveState value);
  
  
  /**
   * Sets the value of the PreRenewalDirection field.
   */
  public void setPreRenewalDirection(typekey.PreRenewalDirection value);
  
  
  /**
   * Sets the value of the RestoreRequests field.
   */
  public void setRestoreRequests(entity.PolicyTermRestoreRequest[] value);
  
  
  /**
   * Sets the value of the TotalEstimatedPremium field.
   */
  public void setTotalEstimatedPremium(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TotalEstimatedPremium_amt field.
   */
  public void setTotalEstimatedPremium_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TotalEstimatedPremium_cur field.
   */
  public void setTotalEstimatedPremium_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the TotalReportedPremium field.
   */
  public void setTotalReportedPremium(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TotalReportedPremium_amt field.
   */
  public void setTotalReportedPremium_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TotalReportedPremium_cur field.
   */
  public void setTotalReportedPremium_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the WorksheetContainers field.
   */
  public void setWorksheetContainers(entity.WorksheetContainer[] value);
  
  
  
}