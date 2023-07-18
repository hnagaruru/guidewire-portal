package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Policy.eti;Policy.eix;Policy.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyInternal extends com.guidewire._generated.entity.EffDatedContainerInternal, com.guidewire._generated.entity.UserRoleOwnerInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.RootInfoInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire._generated.entity.DestructionRootPinnableInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.note.NoteContainer, com.guidewire.pc.domain.personaldata.PinnableDomainMethods, com.guidewire.pc.domain.policy.PolicyInternalMethods, com.guidewire.pc.domain.policy.PolicyPublicMethods, com.guidewire.pc.system.debug.Debuggable, gw.api.assignment.UserRoleOwner, gw.api.contingency.ContingencyCreator, gw.api.domain.document.DocumentContainer, gw.api.history.CustomHistory {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYADDED_EVENT = "PolicyAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYCHANGED_EVENT = "PolicyChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYPURGED_EVENT = "PolicyPurged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYREMOVED_EVENT = "PolicyRemoved";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String TRANSFERPOLICY_EVENT = "TransferPolicy";
  
  /**
   * Adds the given element to the AuditInformations array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAuditInformations(entity.AuditInformation element);
  
  
  /**
   * Adds the given element to the Contingencies array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToContingencies(entity.Contingency element);
  
  
  /**
   * Adds the given element to the DividedToNewAccountSourceJoinArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDividedToNewAccountSourceJoinArray(entity.PolicyPolicyDivide element);
  
  
  /**
   * Adds the given element to the EffDatedRegistry array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToEffDatedRegistry(entity.PolicyEffDatedRegistry element);
  
  
  /**
   * Adds the given element to the IssueHistories array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIssueHistories(entity.UWIssueHistory element);
  
  
  /**
   * Adds the given element to the Jobs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToJobs(entity.Job element);
  
  
  /**
   * Adds the given element to the Notes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToNotes(entity.Note element);
  
  
  /**
   * Adds the given element to the Periods array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPeriods(entity.PolicyPeriod element);
  
  
  /**
   * Adds the given element to the PriorLosses array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPriorLosses(entity.LossHistoryEntry element);
  
  
  /**
   * Adds the given element to the PriorPolicies array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPriorPolicies(entity.PriorPolicy element);
  
  
  /**
   * Adds the given element to the RIRiskVLContainers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRIRiskVLContainers(entity.RIRiskVLContainer element);
  
  
  /**
   * Adds the given element to the RewrittenToNewAccountDestinationJoinArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRewrittenToNewAccountDestinationJoinArray(entity.PolicyPolicyRewrite element);
  
  
  /**
   * Adds the given element to the RewrittenToNewAccountSourceJoinArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRewrittenToNewAccountSourceJoinArray(entity.PolicyPolicyRewrite element);
  
  
  /**
   * Adds the given element to the RoleAssignments array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRoleAssignments(entity.PolicyUserRoleAssignment element);
  
  
  /**
   * Adds the given element to the UWReferralReasons array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToUWReferralReasons(entity.UWReferralReason element);
  
  
  /**
   * Gets the value of the APDProduct field.
   * Advanced product development product
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDProduct getAPDProduct();
  
  
  public gw.pl.persistence.core.Key getAPDProductID();
  
  
  /**
   * Gets the value of the Account field.
   * The Account to which this policy belongs.  Note that getting the value of this foreign key may result in the Account being re-retrieved if it is a non-SOR account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount();
  
  
  public gw.pl.persistence.core.Key getAccountID();
  
  
  /**
   * Gets the value of the AuditInformations field.
   * The audits for this policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AuditInformation[] getAuditInformations();
  
  
  /**
   * Gets the value of the Contingencies field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contingency[] getContingencies();
  
  
  /**
   * Gets the value of the DividedToNewAccountSourceJoin field.
   * Points to the join table of divided policies.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPolicyDivide getDividedToNewAccountSourceJoin();
  
  
  /**
   * Gets the value of the DividedToNewAccountSourceJoinArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPolicyDivide[] getDividedToNewAccountSourceJoinArray();
  
  
  public gw.pl.persistence.core.Key getDividedToNewAccountSourceJoinID();
  
  
  /**
   * Gets the value of the EffDatedRegistry field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyEffDatedRegistry[] getEffDatedRegistry();
  
  
  /**
   * Gets the value of the IssueDate field.
   * The date on which this policy was issued by the issuing job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getIssueDate();
  
  
  /**
   * Gets the value of the IssueHistories field.
   * History of changes to all UW issues associated with this policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssueHistory[] getIssueHistories();
  
  
  /**
   * Gets the value of the Jobs field.
   * Jobs of this policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job[] getJobs();
  
  
  /**
   * Gets the value of the LossHistoryType field.
   * How the loss history is described for this policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LossHistoryType getLossHistoryType();
  
  
  /**
   * Gets the value of the MovedPolicySourceAccount field.
   * The Account to which this policy comes from.  This field is populated if the policy is moved from other account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getMovedPolicySourceAccount();
  
  
  public gw.pl.persistence.core.Key getMovedPolicySourceAccountID();
  
  
  /**
   * Gets the value of the MovedPolicySourceAccountPublicID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMovedPolicySourceAccountPublicID();
  
  
  /**
   * Gets the value of the Notes field.
   * Notes associated with this Policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Note[] getNotes();
  
  
  /**
   * Gets the value of the NumPriorLosses field.
   * The number of losses. Only applicable for a loss history type of 'attached'.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumPriorLosses();
  
  
  /**
   * Gets the value of the OriginalEffectiveDate field.
   * The date on which this policy was originally issued or bound.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getOriginalEffectiveDate();
  
  
  /**
   * Gets the value of the PackageRisk field.
   * Package Risk Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PackageRisk getPackageRisk();
  
  
  /**
   * Gets the value of the Periods field.
   * Periods of this policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod[] getPeriods();
  
  
  /**
   * Gets the value of the PrimaryLanguage field.
   * The policy's preferred language
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LanguageType getPrimaryLanguage();
  
  
  /**
   * Gets the value of the PrimaryLocale field.
   * The policy's preferred locale
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LocaleType getPrimaryLocale();
  
  
  /**
   * Gets the value of the PriorLosses field.
   * Loss history detail entries. Only applicable for a loss history type of 'manually entered'.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LossHistoryEntry[] getPriorLosses();
  
  
  /**
   * Gets the value of the PriorPolicies field.
   * Prior policy information for this policyholder.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PriorPolicy[] getPriorPolicies();
  
  
  /**
   * Gets the value of the PriorPremiums field.
   * Premiums for policy terms prior to PC conversion. This value can be set during conversion on renewal.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getPriorPremiums();
  
  
  /**
   * Gets the value of the PriorPremiums_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPriorPremiums_amt();
  
  
  /**
   * Gets the value of the PriorPremiums_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getPriorPremiums_cur();
  
  
  /**
   * Gets the value of the PriorTotalIncurred field.
   * The total incurred. Only applicable for a loss history type of 'attached'.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getPriorTotalIncurred();
  
  
  /**
   * Gets the value of the PriorTotalIncurred_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPriorTotalIncurred_amt();
  
  
  /**
   * Gets the value of the PriorTotalIncurred_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getPriorTotalIncurred_cur();
  
  
  /**
   * Gets the value of the ProducerCodeOfService field.
   * The producer code that manages this policy and can modify it.  If external user use producer code security, the user must have this producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getProducerCodeOfService();
  
  
  public gw.pl.persistence.core.Key getProducerCodeOfServiceID();
  
  
  /**
   * Gets the value of the ProductCode field.
   * The Product defining what kind of Policy this is
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductCode();
  
  
  /**
   * Gets the value of the RIRiskVLContainers field.
   * All RI Risk VL Containers for any period on this policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIRiskVLContainer[] getRIRiskVLContainers();
  
  
  /**
   * Gets the value of the RewrittenToNewAccountDestinationJoin field.
   * Points to the destination policy part of the join table if the policy has a source policy which has been rewritten
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPolicyRewrite getRewrittenToNewAccountDestinationJoin();
  
  
  /**
   * Gets the value of the RewrittenToNewAccountDestinationJoinArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPolicyRewrite[] getRewrittenToNewAccountDestinationJoinArray();
  
  
  public gw.pl.persistence.core.Key getRewrittenToNewAccountDestinationJoinID();
  
  
  /**
   * Gets the value of the RewrittenToNewAccountSourceJoin field.
   * Points to the source policy part of the join table if the policy has been rewritten
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPolicyRewrite getRewrittenToNewAccountSourceJoin();
  
  
  /**
   * Gets the value of the RewrittenToNewAccountSourceJoinArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPolicyRewrite[] getRewrittenToNewAccountSourceJoinArray();
  
  
  public gw.pl.persistence.core.Key getRewrittenToNewAccountSourceJoinID();
  
  
  /**
   * Gets the value of the RoleAssignments field.
   * Role Assignments for this bean.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyUserRoleAssignment[] getRoleAssignments();
  
  
  /**
   * Gets the value of the UWReferralReasons field.
   * Referral reasons of the policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWReferralReason[] getUWReferralReasons();
  
  
  /**
   * Gets the value of the DoNotArchive field.
   * Do not archive any of the terms for this Policy. Terms that are already archived will not be automatically retrieved.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDoNotArchive();
  
  
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
   * Removes the given element from the Contingencies array. This is achieved by marking the element for removal.
   */
  public void removeFromContingencies(entity.Contingency element);
  
  
  /**
   * Removes the given element from the Contingencies array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromContingencies(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the DividedToNewAccountSourceJoinArray array. This is achieved by marking the element for removal.
   */
  public void removeFromDividedToNewAccountSourceJoinArray(entity.PolicyPolicyDivide element);
  
  
  /**
   * Removes the given element from the DividedToNewAccountSourceJoinArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDividedToNewAccountSourceJoinArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the EffDatedRegistry array. This is achieved by marking the element for removal.
   */
  public void removeFromEffDatedRegistry(entity.PolicyEffDatedRegistry element);
  
  
  /**
   * Removes the given element from the EffDatedRegistry array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromEffDatedRegistry(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the IssueHistories array. This is achieved by marking the element for removal.
   */
  public void removeFromIssueHistories(entity.UWIssueHistory element);
  
  
  /**
   * Removes the given element from the IssueHistories array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIssueHistories(gw.pl.persistence.core.Key elementID);
  
  
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
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   */
  public void removeFromNotes(entity.Note element);
  
  
  /**
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromNotes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Periods array. This is achieved by marking the element for removal.
   */
  public void removeFromPeriods(entity.PolicyPeriod element);
  
  
  /**
   * Removes the given element from the Periods array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPeriods(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PriorLosses array. This is achieved by marking the element for removal.
   */
  public void removeFromPriorLosses(entity.LossHistoryEntry element);
  
  
  /**
   * Removes the given element from the PriorLosses array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPriorLosses(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PriorPolicies array. This is achieved by marking the element for removal.
   */
  public void removeFromPriorPolicies(entity.PriorPolicy element);
  
  
  /**
   * Removes the given element from the PriorPolicies array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPriorPolicies(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RIRiskVLContainers array. This is achieved by marking the element for removal.
   */
  public void removeFromRIRiskVLContainers(entity.RIRiskVLContainer element);
  
  
  /**
   * Removes the given element from the RIRiskVLContainers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRIRiskVLContainers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RewrittenToNewAccountDestinationJoinArray array. This is achieved by marking the element for removal.
   */
  public void removeFromRewrittenToNewAccountDestinationJoinArray(entity.PolicyPolicyRewrite element);
  
  
  /**
   * Removes the given element from the RewrittenToNewAccountDestinationJoinArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRewrittenToNewAccountDestinationJoinArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RewrittenToNewAccountSourceJoinArray array. This is achieved by marking the element for removal.
   */
  public void removeFromRewrittenToNewAccountSourceJoinArray(entity.PolicyPolicyRewrite element);
  
  
  /**
   * Removes the given element from the RewrittenToNewAccountSourceJoinArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRewrittenToNewAccountSourceJoinArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RoleAssignments array. This is achieved by marking the element for removal.
   */
  public void removeFromRoleAssignments(entity.PolicyUserRoleAssignment element);
  
  
  /**
   * Removes the given element from the RoleAssignments array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRoleAssignments(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the UWReferralReasons array. This is achieved by marking the element for removal.
   */
  public void removeFromUWReferralReasons(entity.UWReferralReason element);
  
  
  /**
   * Removes the given element from the UWReferralReasons array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromUWReferralReasons(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the APDProduct field.
   */
  public void setAPDProduct(entity.APDProduct value);
  
  
  public void setAPDProductID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Account field.
   */
  public void setAccount(entity.Account value);
  
  
  public void setAccountID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the AuditInformations field.
   */
  public void setAuditInformations(entity.AuditInformation[] value);
  
  
  /**
   * Sets the value of the Contingencies field.
   */
  public void setContingencies(entity.Contingency[] value);
  
  
  /**
   * Sets the value of the DividedToNewAccountSourceJoin field.
   */
  public void setDividedToNewAccountSourceJoin(entity.PolicyPolicyDivide value);
  
  
  /**
   * Sets the value of the DividedToNewAccountSourceJoinArray field.
   */
  public void setDividedToNewAccountSourceJoinArray(entity.PolicyPolicyDivide[] value);
  
  
  public void setDividedToNewAccountSourceJoinID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DoNotArchive field.
   */
  public void setDoNotArchive(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the EffDatedRegistry field.
   */
  public void setEffDatedRegistry(entity.PolicyEffDatedRegistry[] value);
  
  
  /**
   * Sets the value of the IssueDate field.
   */
  public void setIssueDate(java.util.Date value);
  
  
  /**
   * Sets the value of the IssueHistories field.
   */
  public void setIssueHistories(entity.UWIssueHistory[] value);
  
  
  /**
   * Sets the value of the Jobs field.
   */
  public void setJobs(entity.Job[] value);
  
  
  /**
   * Sets the value of the LossHistoryType field.
   */
  public void setLossHistoryType(typekey.LossHistoryType value);
  
  
  /**
   * Sets the value of the MovedPolicySourceAccount field.
   */
  public void setMovedPolicySourceAccount(entity.Account value);
  
  
  public void setMovedPolicySourceAccountID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the MovedPolicySourceAccountPublicID field.
   */
  public void setMovedPolicySourceAccountPublicID(java.lang.String value);
  
  
  /**
   * Sets the value of the Notes field.
   */
  public void setNotes(entity.Note[] value);
  
  
  /**
   * Sets the value of the NumPriorLosses field.
   */
  public void setNumPriorLosses(java.lang.Integer value);
  
  
  /**
   * Sets the value of the OriginalEffectiveDate field.
   */
  public void setOriginalEffectiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the PackageRisk field.
   */
  public void setPackageRisk(typekey.PackageRisk value);
  
  
  /**
   * Sets the value of the Periods field.
   */
  public void setPeriods(entity.PolicyPeriod[] value);
  
  
  /**
   * Sets the value of the PrimaryLanguage field.
   */
  public void setPrimaryLanguage(typekey.LanguageType value);
  
  
  /**
   * Sets the value of the PrimaryLocale field.
   */
  public void setPrimaryLocale(typekey.LocaleType value);
  
  
  /**
   * Sets the value of the PriorLosses field.
   */
  public void setPriorLosses(entity.LossHistoryEntry[] value);
  
  
  /**
   * Sets the value of the PriorPolicies field.
   */
  public void setPriorPolicies(entity.PriorPolicy[] value);
  
  
  /**
   * Sets the value of the PriorPremiums field.
   */
  public void setPriorPremiums(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the PriorPremiums_amt field.
   */
  public void setPriorPremiums_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the PriorPremiums_cur field.
   */
  public void setPriorPremiums_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the PriorTotalIncurred field.
   */
  public void setPriorTotalIncurred(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the PriorTotalIncurred_amt field.
   */
  public void setPriorTotalIncurred_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the PriorTotalIncurred_cur field.
   */
  public void setPriorTotalIncurred_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the ProducerCodeOfService field.
   */
  public void setProducerCodeOfService(entity.ProducerCode value);
  
  
  public void setProducerCodeOfServiceID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProductCode field.
   */
  public void setProductCode(java.lang.String value);
  
  
  /**
   * Sets the value of the RIRiskVLContainers field.
   */
  public void setRIRiskVLContainers(entity.RIRiskVLContainer[] value);
  
  
  /**
   * Sets the value of the RewrittenToNewAccountDestinationJoin field.
   */
  public void setRewrittenToNewAccountDestinationJoin(entity.PolicyPolicyRewrite value);
  
  
  /**
   * Sets the value of the RewrittenToNewAccountDestinationJoinArray field.
   */
  public void setRewrittenToNewAccountDestinationJoinArray(entity.PolicyPolicyRewrite[] value);
  
  
  public void setRewrittenToNewAccountDestinationJoinID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RewrittenToNewAccountSourceJoin field.
   */
  public void setRewrittenToNewAccountSourceJoin(entity.PolicyPolicyRewrite value);
  
  
  /**
   * Sets the value of the RewrittenToNewAccountSourceJoinArray field.
   */
  public void setRewrittenToNewAccountSourceJoinArray(entity.PolicyPolicyRewrite[] value);
  
  
  public void setRewrittenToNewAccountSourceJoinID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RoleAssignments field.
   */
  public void setRoleAssignments(entity.PolicyUserRoleAssignment[] value);
  
  
  /**
   * Sets the value of the UWReferralReasons field.
   */
  public void setUWReferralReasons(entity.UWReferralReason[] value);
  
  
  
}