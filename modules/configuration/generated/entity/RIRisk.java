package entity;

/**
 * RIRisk
 * A reinsurable risk.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RIRisk.eti;RIRisk.eix;RIRisk.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "RIRisk")
public class RIRisk extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.Extractable, entity.SimpleEffDated, entity.FrozenSetMember, entity.EventAware, gw.api.reinsurance.Cedeable, gw.api.reinsurance.MergeableAdapter {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RIRisk> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RIRisk>("entity.RIRisk");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> DEFAULTRETENTIONFROMPROGRAM_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "DefaultRetentionFromProgram");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEFAULTRETENTIONFROMPROGRAM_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DefaultRetentionFromProgram_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> DEFAULTRETENTIONFROMPROGRAM_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "DefaultRetentionFromProgram_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIRATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpirationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> GROSSRETENTION_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "GrossRetention");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> GROSSRETENTION_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "GrossRetention_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> GROSSRETENTION_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "GrossRetention_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOCATIONRISKGROUP_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LocationRiskGroup");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LOSSDATEATTACHMENTPROGRAM_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LossDateAttachmentProgram");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYATTACHMENTPROGRAM_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PolicyAttachmentProgram");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> POLICYATTACHMENTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "PolicyAttachments");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PROBABLEMAXLOSSPCT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProbableMaxLossPct");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PROBABLEMAXLOSSREASON_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProbableMaxLossReason");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TOTALINSUREDVALUE_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "TotalInsuredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TOTALINSUREDVALUE_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TotalInsuredValue_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TOTALINSUREDVALUE_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TotalInsuredValue_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> VERSIONLIST_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "VersionList");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.RIRiskInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  public static final java.lang.String RIRISKADDED_EVENT = "RIRiskAdded";
  
  public static final java.lang.String RIRISKCHANGED_EVENT = "RIRiskChanged";
  
  public static final java.lang.String RIRISKREMOVED_EVENT = "RIRiskRemoved";
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public RIRisk()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public RIRisk(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected RIRisk(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.RIRiskInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.RIRiskInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Associates an event with the bean, which will be fired when the bean is
   * committed. A bean with an event is considered changed.
   * @param strEventId The event id.
   */
  public void addEvent(java.lang.String strEventId) {
    ((com.guidewire.pl.domain.messaging.EventAwarePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.EventAwarePublicMethods")).addEvent(strEventId);
  }
  
  /**
   * Attach this ririsk to an agreement. This should be the only way to attach an
   * agreement to a ririsk.
   * @param agreement the agreement
   * @param program the program
   * @return the attachment
   */
  public entity.RIPolicyAttachment attach(entity.RIAgreement agreement, entity.RIProgram program) {
    return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).attach(agreement, program);
  }
  
  /**
   * Check if the given agreement can be attached to this risk. Return empty list if it can be.
   * @param agreement the agreement
   * @return the list of errors
   */
  public java.util.List<java.lang.String> canAttach(entity.RIAgreement agreement) {
    return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).canAttach(agreement);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Copy the values from the latest version of the previous term to this version.
   * @param previousTerm the latest version from the previous term
   */
  public void copyFromPreviousTerm(gw.api.reinsurance.MergeableAdapter previousTerm) {
    ((gw.api.reinsurance.MergeableAdapter)__getDelegateManager().getImplementation("gw.api.reinsurance.MergeableAdapter")).copyFromPreviousTerm(previousTerm);
  }
  
  /**
   * Detach an agreement from this ririsk. This should be the only way to detach an
   * agreement from a risk.
   * @param agreement the agreement
   */
  public void detach(entity.RIAgreement agreement) {
    ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).detach(agreement);
  }
  
  /**
   * Detach an agreement from this ririsk. This should be the only way to remove an
   * attachment.
   * @param attachment the attachment
   */
  public void detach(entity.RIPolicyAttachment attachment) {
    ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).detach(attachment);
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getArchivePartition() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
  }
  
  /**
   * Returns attachments for the purpose of validation. The date to look
   * for attachments will always be this risk effective date (because we
   * always validate at effective date).
   * @return list of attachments
   */
  public java.util.List<gw.api.reinsurance.RIAttachment> getAttachments() {
    return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).getAttachments();
  }
  
  /**
   * Returns attachments at the given date for loss recovery.
   * @param asOfDate the given date to find loss date attachment.
   * @return list of attachments
   */
  public java.util.List<gw.api.reinsurance.RIAttachment> getAttachmentsForLoss(java.util.Date asOfDate) {
    return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).getAttachmentsForLoss(asOfDate);
  }
  
  /**
   * Returns the version of this RI risk that is already bound and is what this version based on.
   * @return the bound version
   */
  public entity.RIRisk getBasedOn() {
    return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).getBasedOn();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the CreateTime field.
   * Timestamp when the object was created
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCreateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the CreateUser field.
   * User who created the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getCreateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
  }
  
  /**
   * 
   * @return the currency associated with the agreement
   */
  public typekey.Currency getCurrency() {
    return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).getCurrency();
  }
  
  /**
   * Gets the value of the DefaultRetentionFromProgram field.
   * De Facto Gross Retention in effect when program was attached.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getDefaultRetentionFromProgram() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(DEFAULTRETENTIONFROMPROGRAM_PROP.get());
  }
  
  /**
   * Gets the value of the DefaultRetentionFromProgram_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDefaultRetentionFromProgram_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEFAULTRETENTIONFROMPROGRAM_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the DefaultRetentionFromProgram_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getDefaultRetentionFromProgram_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(DEFAULTRETENTIONFROMPROGRAM_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the EffectiveDate field.
   * Effective date of this row.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EFFECTIVEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the ExpirationDate field.
   * Expiration date of this row or NULL in the database if this row never expires.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpirationDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EXPIRATIONDATE_PROP.get());
  }
  
  /**
   * Gets the value of the FrozenSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FrozenSet getFrozenSet() {
    return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
  }
  
  /**
   * Gets the value of the GrossRetention field.
   * first layer of risk prior to ceding to any surplus treaty and which would be shared with a quota share treaty
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getGrossRetention() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(GROSSRETENTION_PROP.get());
  }
  
  /**
   * Gets the value of the GrossRetention_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getGrossRetention_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(GROSSRETENTION_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the GrossRetention_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getGrossRetention_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(GROSSRETENTION_CUR_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the LocationRiskGroup field.
   * For grouping location risks. Placed on RIRisk instead of on the effDated LocationGroup so that it can be edited after the policy is locked.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLocationRiskGroup() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LOCATIONRISKGROUP_PROP.get());
  }
  
  /**
   * Gets the value of the LossDateAttachmentProgram field.
   * Reinsurance program associated with this RIRisk, as of the RIRisk's slice date.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIProgram getLossDateAttachmentProgram() {
    return (entity.RIProgram)__getInternalInterface().getFieldValue(LOSSDATEATTACHMENTPROGRAM_PROP.get());
  }
  
  /**
   * Find reinsurance program for loss date attachments
   * @param asOfDate the date of which program is used
   * @return reinsurance program associated with this ririsk
   */
  public entity.RIProgram getLossDateAttachmentProgram(java.util.Date asOfDate) {
    return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).getLossDateAttachmentProgram(asOfDate);
  }
  
  /**
   * Returns the list of agreements associated with this risks.
   * @return the list of agreements.
   */
  public entity.RIAgreement[] getPolicyAttachmentAgreements() {
    return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).getPolicyAttachmentAgreements();
  }
  
  /**
   * Gets the value of the PolicyAttachmentProgram field.
   * Reinsurance program associated with this RIRisk on the date Policy was issued.   This is applicable for policy-attached reinsurance.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIProgram getPolicyAttachmentProgram() {
    return (entity.RIProgram)__getInternalInterface().getFieldValue(POLICYATTACHMENTPROGRAM_PROP.get());
  }
  
  /**
   * All policy attachments of this risk
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIPolicyAttachment[] getPolicyAttachments() {
    return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).getPolicyAttachments();
  }
  
  /**
   * Gets the value of the ProbableMaxLossPct field.
   * Probable Maximum Loss Percentage.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getProbableMaxLossPct() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PROBABLEMAXLOSSPCT_PROP.get());
  }
  
  /**
   * Gets the value of the ProbableMaxLossReason field.
   * Probable Maximum Loss Reason.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProbableMaxLossReason() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PROBABLEMAXLOSSREASON_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Look up Reinsurable associated with a this risk.
   * @return the reinsurable associated with this risk.
   */
  public entity.Reinsurable getReinsurable() {
    return ((gw.api.reinsurance.Cedeable)__getDelegateManager().getImplementation("gw.api.reinsurance.Cedeable")).getReinsurable();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRetiredValue() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RETIREDVALUE_PROP.get());
  }
  
  /**
   * Returns the risk number of this risk.
   * @return the risk number
   */
  public java.lang.String getRiskNumber() {
    return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).getRiskNumber();
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RIRisk getSubtype() {
    return (typekey.RIRisk)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the TotalInsuredValue field.
   * Total insured value (property coverage) or sum insured (liability coverage) for the risk.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalInsuredValue() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALINSUREDVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the TotalInsuredValue_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalInsuredValue_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALINSUREDVALUE_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the TotalInsuredValue_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalInsuredValue_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALINSUREDVALUE_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateTime field.
   * Timestamp when the object was last updated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateUser field.
   * User who last updated the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUpdateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
  }
  
  /**
   * Gets the value of the VersionList field.
   * The version list of this RIRisk.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIRiskVersionList getVersionList() {
    return (entity.RIRiskVersionList)__getInternalInterface().getFieldValue(VERSIONLIST_PROP.get());
  }
  
  /**
   * Returns the list of changes made to this
   * @return the list of changes
   */
  public boolean isChangedByUser() {
    return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).isChangedByUser();
  }
  
  /**
   * Returns true if this is effective for the given period.
   * @param start start of the period
   * @param end end of the period
   * @return true if effective window overlaps given dates, false otherwise
   */
  public boolean isEffective(java.util.Date start, java.util.Date end) {
    return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isEffective(start, end);
  }
  
  /**
   * Returns true if this is effective at the given date.
   * @param date the date to check
   * @return true if this is effective at given date, false otherwise
   */
  public boolean isEffectiveAt(java.util.Date date) {
    return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isEffectiveAt(date);
  }
  
  public boolean isFrozen() {
    return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
  }
  
  /**
   * Returns true if other is an identical slice and can be merged with this slice to form one
   * single slice. This is used when we try to merge slices together when there is no changes.
   * @param other the other slice
   * @return boolean value
   */
  public boolean isIdentical(java.lang.Object other) {
    return ((gw.api.reinsurance.MergeableAdapter)__getDelegateManager().getImplementation("gw.api.reinsurance.MergeableAdapter")).isIdentical(other);
  }
  
  /**
   * 
   * @return true if this bean is to be inserted into the database when the bundle is committed.
   */
  public boolean isNew() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
  }
  
  /**
   * 
   * @return True if the object was created by importation from an external system,
   *         False if it was created internally. Note that this refers to the currently
   *         instantiated object, not the data it represents
   */
  public boolean isNewlyImported() {
    return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
  }
  
  /**
   * Returns true if the effective window of this overlaps with the effective window of other.
   * @param other the other eff dated
   * @return true if the effective windows of this and other overlap, false otherwise.
   */
  public boolean isOverlap(entity.SimpleEffDated other) {
    return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isOverlap(other);
  }
  
  /**
   * 
   * @return True if the object has been retired from active use, false if the
   *         object is active.  Retireable objects are never deleted from a
   *         database table, instead they are retired by setting the retired
   *         column to the same value as the ID of the object.
   */
  public java.lang.Boolean isRetired() {
    return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
  }
  
  /**
   * Returns true if other is another version of this mergeable. This is used when we propagate
   * changes to the next slice.
   * @param other other slice
   * @return boolean value
   */
  public boolean isTheSame(java.lang.Object other) {
    return ((gw.api.reinsurance.MergeableAdapter)__getDelegateManager().getImplementation("gw.api.reinsurance.MergeableAdapter")).isTheSame(other);
  }
  
  /**
   * Make this version the only active version.
   */
  public void makeActive() {
    ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).makeActive();
  }
  
  /**
   * Refreshes this bean with the latest database version.
   * <p/>
   * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
   * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
   * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
   * updated.
   */
  public entity.KeyableBean refresh() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
  }
  
  /**
   * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
   * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
   * <p>
   * WARNING: This method is designed for simple custom entities which are normally not
   * associated with other entities. Undesirable results may occur when used on out-of-box entities.
   */
  public void remove() {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateTime field.
   */
  private void setCreateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateUser field.
   */
  private void setCreateUser(entity.User value) {
    __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DefaultRetentionFromProgram field.
   */
  public void setDefaultRetentionFromProgram(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(DEFAULTRETENTIONFROMPROGRAM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DefaultRetentionFromProgram_amt field.
   */
  private void setDefaultRetentionFromProgram_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(DEFAULTRETENTIONFROMPROGRAM_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DefaultRetentionFromProgram_cur field.
   */
  private void setDefaultRetentionFromProgram_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(DEFAULTRETENTIONFROMPROGRAM_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EffectiveDate field.
   */
  public void setEffectiveDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(EFFECTIVEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExpirationDate field.
   */
  public void setExpirationDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(EXPIRATIONDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FrozenSet field.
   */
  public void setFrozenSet(entity.FrozenSet value) {
    __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the GrossRetention field.
   */
  public void setGrossRetention(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(GROSSRETENTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the GrossRetention_amt field.
   */
  private void setGrossRetention_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(GROSSRETENTION_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the GrossRetention_cur field.
   */
  private void setGrossRetention_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(GROSSRETENTION_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LocationRiskGroup field.
   */
  public void setLocationRiskGroup(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LOCATIONRISKGROUP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LossDateAttachmentProgram field.
   */
  public void setLossDateAttachmentProgram(entity.RIProgram value) {
    __getInternalInterface().setFieldValue(LOSSDATEATTACHMENTPROGRAM_PROP.get(), value);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  /**
   * Sets the value of the PolicyAttachmentProgram field.
   */
  public void setPolicyAttachmentProgram(entity.RIProgram value) {
    __getInternalInterface().setFieldValue(POLICYATTACHMENTPROGRAM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyAttachments field.
   */
  private void setPolicyAttachments(entity.RIPolicyAttachment[] value) {
    __getInternalInterface().setFieldValue(POLICYATTACHMENTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProbableMaxLossPct field.
   */
  public void setProbableMaxLossPct(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(PROBABLEMAXLOSSPCT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProbableMaxLossReason field.
   */
  public void setProbableMaxLossReason(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PROBABLEMAXLOSSREASON_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.RIRisk value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalInsuredValue field.
   */
  public void setTotalInsuredValue(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TOTALINSUREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalInsuredValue_amt field.
   */
  private void setTotalInsuredValue_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TOTALINSUREDVALUE_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalInsuredValue_cur field.
   */
  private void setTotalInsuredValue_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TOTALINSUREDVALUE_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateTime field.
   */
  private void setUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateUser field.
   */
  private void setUpdateUser(entity.User value) {
    __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the VersionList field.
   */
  private void setVersionList(entity.RIRiskVersionList value) {
    __getInternalInterface().setFieldValue(VERSIONLIST_PROP.get(), value);
  }
  
  /**
   * Set's the version of the bean to the next value (i.e. the bean version original value+1)
   * Multiple calls to this method on the same bean will result in the same value being used
   * for the version (i.e. it is idempotent).
   * 
   * Calling this method will force the bean to be written to the database and participate fully
   * in the commit cycle e.g. pre-update rules will be run, etc.
   */
  public void touch() {
    ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
  }
  
  public java.util.List<gw.api.reinsurance.RIAttachment> updateCeding(java.util.List<gw.api.reinsurance.RIAttachment> attachments) {
    return ((gw.api.reinsurance.Cedeable)__getDelegateManager().getImplementation("gw.api.reinsurance.Cedeable")).updateCeding(attachments);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.RIRiskInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.RIRisk.this.__getDelegateManager();
    }
    
    public void addEvent(com.guidewire.pl.system.entity.BeanEvent event) {
      ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).addEvent(event);
    }
    
    /**
     * Associates an event with the bean, which will be fired when the bean is
     * committed. A bean with an event is considered changed.
     * @param strEventId The event id.
     */
    public void addEvent(java.lang.String strEventId) {
      ((com.guidewire.pl.domain.messaging.EventAwarePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.EventAwarePublicMethods")).addEvent(strEventId);
    }
    
    /**
     * Adds the given element to the PolicyAttachments array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPolicyAttachments(entity.RIPolicyAttachment element) {
      __getInternalInterface().addArrayElement(POLICYATTACHMENTS_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    /**
     * Attach this ririsk to an agreement. This should be the only way to attach an
     * agreement to a ririsk.
     * @param agreement the agreement
     * @param program the program
     * @return the attachment
     */
    public entity.RIPolicyAttachment attach(entity.RIAgreement agreement, entity.RIProgram program) {
      return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).attach(agreement, program);
    }
    
    public entity.RIPolicyAttachment attachInternal(entity.RIAgreement agreement, entity.RIProgram program) {
      return ((com.guidewire.pc.domain.reinsurance.impl.RIRiskInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.impl.RIRiskInternalMethods")).attachInternal(agreement, program);
    }
    
    public java.lang.Integer calculateNextVersion() {
      return ((com.guidewire.pl.domain.persistence.core.impl.VersionableInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal")).calculateNextVersion();
    }
    
    /**
     * Check if the given agreement can be attached to this risk. Return empty list if it can be.
     * @param agreement the agreement
     * @return the list of errors
     */
    public java.util.List<java.lang.String> canAttach(entity.RIAgreement agreement) {
      return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).canAttach(agreement);
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    /**
     * 
     * @return A copy of the current bean and a deep copy of all owned array elements
     */
    public entity.KeyableBean copy() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
    }
    
    /**
     * Copy the values from the latest version of the previous term to this version.
     * @param previousTerm the latest version from the previous term
     */
    public void copyFromPreviousTerm(gw.api.reinsurance.MergeableAdapter previousTerm) {
      ((gw.api.reinsurance.MergeableAdapter)__getDelegateManager().getImplementation("gw.api.reinsurance.MergeableAdapter")).copyFromPreviousTerm(previousTerm);
    }
    
    public boolean datesAllowAttachment(entity.RIAgreement agreement) {
      return ((com.guidewire.pc.domain.reinsurance.impl.RIRiskInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.impl.RIRiskInternalMethods")).datesAllowAttachment(agreement);
    }
    
    /**
     * Detach an agreement from this ririsk. This should be the only way to detach an
     * agreement from a risk.
     * @param agreement the agreement
     */
    public void detach(entity.RIAgreement agreement) {
      ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).detach(agreement);
    }
    
    /**
     * Detach an agreement from this ririsk. This should be the only way to remove an
     * attachment.
     * @param attachment the attachment
     */
    public void detach(entity.RIPolicyAttachment attachment) {
      ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).detach(attachment);
    }
    
    public boolean detachInternal(entity.RIPolicyAttachment attachment) {
      return ((com.guidewire.pc.domain.reinsurance.impl.RIRiskInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.impl.RIRiskInternalMethods")).detachInternal(attachment);
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    public entity.RIPolicyAttachment findMatchingAttachment(entity.RIPolicyAttachment attachment) {
      return ((com.guidewire.pc.domain.reinsurance.impl.RIRiskInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.impl.RIRiskInternalMethods")).findMatchingAttachment(attachment);
    }
    
    public java.util.List generateInsertEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateInsertEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List generateRemoveEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateRemoveEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List generateUpdateEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateUpdateEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    /**
     * Gets the value of the ArchivePartition field.
     * Unique number to partition the data so that the multiple workers can work independently
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getArchivePartition() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
    }
    
    /**
     * Returns attachments for the purpose of validation. The date to look
     * for attachments will always be this risk effective date (because we
     * always validate at effective date).
     * @return list of attachments
     */
    public java.util.List<gw.api.reinsurance.RIAttachment> getAttachments() {
      return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).getAttachments();
    }
    
    public java.util.List<gw.api.reinsurance.RIAttachment> getAttachmentsForDate(java.util.Date asOfDate) {
      return ((com.guidewire.pc.domain.reinsurance.impl.RIRiskInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.impl.RIRiskInternalMethods")).getAttachmentsForDate(asOfDate);
    }
    
    /**
     * Returns attachments at the given date for loss recovery.
     * @param asOfDate the given date to find loss date attachment.
     * @return list of attachments
     */
    public java.util.List<gw.api.reinsurance.RIAttachment> getAttachmentsForLoss(java.util.Date asOfDate) {
      return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).getAttachmentsForLoss(asOfDate);
    }
    
    /**
     * Returns the version of this RI risk that is already bound and is what this version based on.
     * @return the bound version
     */
    public entity.RIRisk getBasedOn() {
      return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).getBasedOn();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the CreateTime field.
     * Timestamp when the object was created
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCreateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the CreateUser field.
     * User who created the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getCreateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getCreateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CREATEUSER_PROP.get());
    }
    
    /**
     * 
     * @return the currency associated with the agreement
     */
    public typekey.Currency getCurrency() {
      return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).getCurrency();
    }
    
    /**
     * Gets the value of the DefaultRetentionFromProgram field.
     * De Facto Gross Retention in effect when program was attached.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getDefaultRetentionFromProgram() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(DEFAULTRETENTIONFROMPROGRAM_PROP.get());
    }
    
    /**
     * Gets the value of the DefaultRetentionFromProgram_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getDefaultRetentionFromProgram_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEFAULTRETENTIONFROMPROGRAM_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the DefaultRetentionFromProgram_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getDefaultRetentionFromProgram_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(DEFAULTRETENTIONFROMPROGRAM_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the EffectiveDate field.
     * Effective date of this row.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEffectiveDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(EFFECTIVEDATE_PROP.get());
    }
    
    public com.guidewire.pl.system.entity.BeanEvent[] getEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).getEvents();
    }
    
    /**
     * Gets the value of the ExpirationDate field.
     * Expiration date of this row or NULL in the database if this row never expires.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getExpirationDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(EXPIRATIONDATE_PROP.get());
    }
    
    /**
     * Gets the value of the FrozenSet field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.FrozenSet getFrozenSet() {
      return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getFrozenSetID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(FROZENSET_PROP.get());
    }
    
    /**
     * Gets the value of the GrossRetention field.
     * first layer of risk prior to ceding to any surplus treaty and which would be shared with a quota share treaty
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getGrossRetention() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(GROSSRETENTION_PROP.get());
    }
    
    /**
     * Gets the value of the GrossRetention_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getGrossRetention_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(GROSSRETENTION_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the GrossRetention_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getGrossRetention_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(GROSSRETENTION_CUR_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the LocationRiskGroup field.
     * For grouping location risks. Placed on RIRisk instead of on the effDated LocationGroup so that it can be edited after the policy is locked.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLocationRiskGroup() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LOCATIONRISKGROUP_PROP.get());
    }
    
    /**
     * Gets the value of the LossDateAttachmentProgram field.
     * Reinsurance program associated with this RIRisk, as of the RIRisk's slice date.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RIProgram getLossDateAttachmentProgram() {
      return (entity.RIProgram)__getInternalInterface().getFieldValue(LOSSDATEATTACHMENTPROGRAM_PROP.get());
    }
    
    /**
     * Find reinsurance program for loss date attachments
     * @param asOfDate the date of which program is used
     * @return reinsurance program associated with this ririsk
     */
    public entity.RIProgram getLossDateAttachmentProgram(java.util.Date asOfDate) {
      return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).getLossDateAttachmentProgram(asOfDate);
    }
    
    public gw.pl.persistence.core.Key getLossDateAttachmentProgramID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LOSSDATEATTACHMENTPROGRAM_PROP.get());
    }
    
    public entity.RIRisk getNextVersion() {
      return ((com.guidewire.pc.domain.reinsurance.impl.RIRiskInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.impl.RIRiskInternalMethods")).getNextVersion();
    }
    
    /**
     * Returns the list of agreements associated with this risks.
     * @return the list of agreements.
     */
    public entity.RIAgreement[] getPolicyAttachmentAgreements() {
      return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).getPolicyAttachmentAgreements();
    }
    
    /**
     * Gets the value of the PolicyAttachmentProgram field.
     * Reinsurance program associated with this RIRisk on the date Policy was issued.   This is applicable for policy-attached reinsurance.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RIProgram getPolicyAttachmentProgram() {
      return (entity.RIProgram)__getInternalInterface().getFieldValue(POLICYATTACHMENTPROGRAM_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyAttachmentProgramID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICYATTACHMENTPROGRAM_PROP.get());
    }
    
    /**
     * All policy attachments of this risk
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RIPolicyAttachment[] getPolicyAttachments() {
      return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).getPolicyAttachments();
    }
    
    /**
     * Gets the value of the ProbableMaxLossPct field.
     * Probable Maximum Loss Percentage.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getProbableMaxLossPct() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PROBABLEMAXLOSSPCT_PROP.get());
    }
    
    /**
     * Gets the value of the ProbableMaxLossReason field.
     * Probable Maximum Loss Reason.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProbableMaxLossReason() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PROBABLEMAXLOSSREASON_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Look up Reinsurable associated with a this risk.
     * @return the reinsurable associated with this risk.
     */
    public entity.Reinsurable getReinsurable() {
      return ((gw.api.reinsurance.Cedeable)__getDelegateManager().getImplementation("gw.api.reinsurance.Cedeable")).getReinsurable();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Returns the risk number of this risk.
     * @return the risk number
     */
    public java.lang.String getRiskNumber() {
      return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).getRiskNumber();
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.RIRisk getSubtype() {
      return (typekey.RIRisk)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the TotalInsuredValue field.
     * Total insured value (property coverage) or sum insured (liability coverage) for the risk.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getTotalInsuredValue() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALINSUREDVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the TotalInsuredValue_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getTotalInsuredValue_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALINSUREDVALUE_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the TotalInsuredValue_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getTotalInsuredValue_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALINSUREDVALUE_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateTime field.
     * Timestamp when the object was last updated
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getUpdateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateUser field.
     * User who last updated the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getUpdateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getUpdateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UPDATEUSER_PROP.get());
    }
    
    /**
     * Gets the value of the VersionList field.
     * The version list of this RIRisk.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RIRiskVersionList getVersionList() {
      return (entity.RIRiskVersionList)__getInternalInterface().getFieldValue(VERSIONLIST_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getVersionListID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(VERSIONLIST_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    public void invalidateCache() {
      ((com.guidewire.pc.domain.reinsurance.impl.RIRiskInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.impl.RIRiskInternalMethods")).invalidateCache();
    }
    
    /**
     * Returns the list of changes made to this
     * @return the list of changes
     */
    public boolean isChangedByUser() {
      return ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).isChangedByUser();
    }
    
    /**
     * Returns true if this is effective for the given period.
     * @param start start of the period
     * @param end end of the period
     * @return true if effective window overlaps given dates, false otherwise
     */
    public boolean isEffective(java.util.Date start, java.util.Date end) {
      return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isEffective(start, end);
    }
    
    /**
     * Returns true if this is effective at the given date.
     * @param date the date to check
     * @return true if this is effective at given date, false otherwise
     */
    public boolean isEffectiveAt(java.util.Date date) {
      return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isEffectiveAt(date);
    }
    
    public boolean isFrozen() {
      return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
    }
    
    /**
     * Returns true if other is an identical slice and can be merged with this slice to form one
     * single slice. This is used when we try to merge slices together when there is no changes.
     * @param other the other slice
     * @return boolean value
     */
    public boolean isIdentical(java.lang.Object other) {
      return ((gw.api.reinsurance.MergeableAdapter)__getDelegateManager().getImplementation("gw.api.reinsurance.MergeableAdapter")).isIdentical(other);
    }
    
    /**
     * 
     * @return true if this bean is to be inserted into the database when the bundle is committed.
     */
    public boolean isNew() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
    }
    
    /**
     * 
     * @return True if the object was created by importation from an external system,
     *         False if it was created internally. Note that this refers to the currently
     *         instantiated object, not the data it represents
     */
    public boolean isNewlyImported() {
      return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
    }
    
    public boolean isOkToRetire() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).isOkToRetire();
    }
    
    /**
     * Returns true if the effective window of this overlaps with the effective window of other.
     * @param other the other eff dated
     * @return true if the effective windows of this and other overlap, false otherwise.
     */
    public boolean isOverlap(entity.SimpleEffDated other) {
      return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isOverlap(other);
    }
    
    /**
     * 
     * @return True if the object has been retired from active use, false if the
     *         object is active.  Retireable objects are never deleted from a
     *         database table, instead they are retired by setting the retired
     *         column to the same value as the ID of the object.
     */
    public java.lang.Boolean isRetired() {
      return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    /**
     * Returns true if other is another version of this mergeable. This is used when we propagate
     * changes to the next slice.
     * @param other other slice
     * @return boolean value
     */
    public boolean isTheSame(java.lang.Object other) {
      return ((gw.api.reinsurance.MergeableAdapter)__getDelegateManager().getImplementation("gw.api.reinsurance.MergeableAdapter")).isTheSame(other);
    }
    
    /**
     * Make this version the only active version.
     */
    public void makeActive() {
      ((com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods")).makeActive();
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    public void putInBundle() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).putInBundle();
    }
    
    /**
     * Refreshes this bean with the latest database version.
     * <p/>
     * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
     * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
     * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
     * updated.
     */
    public entity.KeyableBean refresh() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
    }
    
    public entity.KeyableBean reload(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).reload(bundle);
    }
    
    /**
     * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
     * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
     * <p>
     * WARNING: This method is designed for simple custom entities which are normally not
     * associated with other entities. Undesirable results may occur when used on out-of-box entities.
     */
    public void remove() {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
    }
    
    /**
     * Removes the given element from the PolicyAttachments array. This is achieved by marking the element for removal.
     */
    public void removeFromPolicyAttachments(entity.RIPolicyAttachment element) {
      __getInternalInterface().removeArrayElement(POLICYATTACHMENTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the PolicyAttachments array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPolicyAttachments(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(POLICYATTACHMENTS_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateTime field.
     */
    public void setCreateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateUser field.
     */
    public void setCreateUser(entity.User value) {
      __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    public void setCreateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DefaultRetentionFromProgram field.
     */
    public void setDefaultRetentionFromProgram(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(DEFAULTRETENTIONFROMPROGRAM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DefaultRetentionFromProgram_amt field.
     */
    public void setDefaultRetentionFromProgram_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(DEFAULTRETENTIONFROMPROGRAM_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DefaultRetentionFromProgram_cur field.
     */
    public void setDefaultRetentionFromProgram_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(DEFAULTRETENTIONFROMPROGRAM_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EffectiveDate field.
     */
    public void setEffectiveDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(EFFECTIVEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExpirationDate field.
     */
    public void setExpirationDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(EXPIRATIONDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FrozenSet field.
     */
    public void setFrozenSet(entity.FrozenSet value) {
      __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
    }
    
    public void setFrozenSetID(gw.pl.persistence.core.Key value) {
      setFieldValue(FROZENSET_PROP.get(), value);
    }
    
    /**
     * Sets the value of the GrossRetention field.
     */
    public void setGrossRetention(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(GROSSRETENTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the GrossRetention_amt field.
     */
    public void setGrossRetention_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(GROSSRETENTION_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the GrossRetention_cur field.
     */
    public void setGrossRetention_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(GROSSRETENTION_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LocationRiskGroup field.
     */
    public void setLocationRiskGroup(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LOCATIONRISKGROUP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LossDateAttachmentProgram field.
     */
    public void setLossDateAttachmentProgram(entity.RIProgram value) {
      __getInternalInterface().setFieldValue(LOSSDATEATTACHMENTPROGRAM_PROP.get(), value);
    }
    
    public void setLossDateAttachmentProgramID(gw.pl.persistence.core.Key value) {
      setFieldValue(LOSSDATEATTACHMENTPROGRAM_PROP.get(), value);
    }
    
    /**
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    /**
     * Sets the value of the PolicyAttachmentProgram field.
     */
    public void setPolicyAttachmentProgram(entity.RIProgram value) {
      __getInternalInterface().setFieldValue(POLICYATTACHMENTPROGRAM_PROP.get(), value);
    }
    
    public void setPolicyAttachmentProgramID(gw.pl.persistence.core.Key value) {
      setFieldValue(POLICYATTACHMENTPROGRAM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyAttachments field.
     */
    public void setPolicyAttachments(entity.RIPolicyAttachment[] value) {
      __getInternalInterface().setFieldValue(POLICYATTACHMENTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProbableMaxLossPct field.
     */
    public void setProbableMaxLossPct(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(PROBABLEMAXLOSSPCT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProbableMaxLossReason field.
     */
    public void setProbableMaxLossReason(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PROBABLEMAXLOSSREASON_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    public void setRetired() {
      ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).setRetired();
    }
    
    /**
     * Sets the value of the RetiredValue field.
     */
    public void setRetiredValue(java.lang.Long value) {
      __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.RIRisk value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalInsuredValue field.
     */
    public void setTotalInsuredValue(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(TOTALINSUREDVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalInsuredValue_amt field.
     */
    public void setTotalInsuredValue_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(TOTALINSUREDVALUE_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalInsuredValue_cur field.
     */
    public void setTotalInsuredValue_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(TOTALINSUREDVALUE_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateTime field.
     */
    public void setUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateUser field.
     */
    public void setUpdateUser(entity.User value) {
      __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    public void setUpdateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the VersionList field.
     */
    public void setVersionList(entity.RIRiskVersionList value) {
      __getInternalInterface().setFieldValue(VERSIONLIST_PROP.get(), value);
    }
    
    public void setVersionListID(gw.pl.persistence.core.Key value) {
      setFieldValue(VERSIONLIST_PROP.get(), value);
    }
    
    /**
     * Set's the version of the bean to the next value (i.e. the bean version original value+1)
     * Multiple calls to this method on the same bean will result in the same value being used
     * for the version (i.e. it is idempotent).
     * 
     * Calling this method will force the bean to be written to the database and participate fully
     * in the commit cycle e.g. pre-update rules will be run, etc.
     */
    public void touch() {
      ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
    }
    
    public java.util.List<gw.api.reinsurance.RIAttachment> updateCeding(java.util.List<gw.api.reinsurance.RIAttachment> attachments) {
      return ((gw.api.reinsurance.Cedeable)__getDelegateManager().getImplementation("gw.api.reinsurance.Cedeable")).updateCeding(attachments);
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods", "com.guidewire.pc.domain.product.impl.SimpleEffDatedImpl");
    config.put("com.guidewire.pc.domain.reinsurance.RIRiskPublicMethods", "com.guidewire.pc.domain.reinsurance.impl.RIRiskImpl");
    config.put("com.guidewire.pc.domain.reinsurance.impl.RIRiskInternalMethods", "com.guidewire.pc.domain.reinsurance.impl.RIRiskImpl");
    config.put("com.guidewire.pl.domain.messaging.EventAwarePublicMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods", "com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethodsImpl");
    config.put("gw.api.reinsurance.Cedeable", "gw.reinsurance.risk.RIRiskCedeableAdapter");
    config.put("gw.api.reinsurance.MergeableAdapter", "gw.reinsurance.risk.RIRiskMergeableAdapter");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.RIRisk.class, config);
    com.guidewire._generated.entity.RIRiskInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.RIRisk, com.guidewire._generated.entity.RIRiskInternal>() {
      public java.lang.Object getImplementation(entity.RIRisk bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.RIRiskInternal getInternalInterface(entity.RIRisk bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.RIRisk newEmptyInstance() {
        return new entity.RIRisk((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}