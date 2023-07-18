package entity;

/**
 * FacNetExcessOfLossRIAgreement
 * 
 *     Facultative Net Excess of Loss reinsurance agreement.  
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FacNetExcessOfLossRIAgreement.eti;FacNetExcessOfLossRIAgreement.eix;FacNetExcessOfLossRIAgreement.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "FacNetExcessOfLossRIAgreement")
public class FacNetExcessOfLossRIAgreement extends entity.NonProportionalRIAgreement implements entity.Facultative, entity.PerRisk, gw.api.reinsurance.CedingRecipient {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.FacNetExcessOfLossRIAgreement> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.FacNetExcessOfLossRIAgreement>("entity.FacNetExcessOfLossRIAgreement");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> CEDEDPREMIUM_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "CededPremium");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEDPREMIUM_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CededPremium_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CEDEDPREMIUM_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "CededPremium_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COUNTTOWARDTOTALLIMIT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CountTowardTotalLimit");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FLATPREMIUMADJUSTED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FlatPremiumAdjusted");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MARKUP_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MarkUp");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> NOTIFICATIONTHRESHOLD_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "NotificationThreshold");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NOTIFICATIONTHRESHOLD_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NotificationThreshold_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> NOTIFICATIONTHRESHOLD_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "NotificationThreshold_cur");
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public FacNetExcessOfLossRIAgreement()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public FacNetExcessOfLossRIAgreement(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected FacNetExcessOfLossRIAgreement(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected com.guidewire._generated.entity.FacNetExcessOfLossRIAgreementInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.FacNetExcessOfLossRIAgreementInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.FacNetExcessOfLossRIAgreementInternal)super.__getInternalInterface();
  }
  
  /**
   * Returns a list of attached risks taking into account inserted and removed beans in the bundle.
   * Edited beans in the bundle have no affect.
   * @param bundle bundle with any uncommitted changes
   * @return a list of attached risks
   */
  public java.util.List<entity.RIPolicyAttachment> getAttachments(gw.pl.persistence.core.Bundle bundle) {
    return ((com.guidewire.pc.domain.reinsurance.FacultativePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.FacultativePublicMethods")).getAttachments(bundle);
  }
  
  /**
   * Gets the value of the CededPremium field.
   * Defined as an actual amount rather than a rate.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getCededPremium() {
    return ((com.guidewire.pc.domain.reinsurance.FacultativePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.FacultativePublicMethods")).getCededPremium();
  }
  
  /**
   * Gets the value of the CededPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCededPremium_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(CEDEDPREMIUM_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the CededPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCededPremium_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(CEDEDPREMIUM_CUR_PROP.get());
  }
  
  /**
   * currency for facultative
   * @return 
   */
  public typekey.Currency getFacultativeCurrency() {
    return ((com.guidewire.pc.domain.reinsurance.FacultativePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.FacultativePublicMethods")).getFacultativeCurrency();
  }
  
  /**
   * Gets the value of the MarkUp field.
   * Additional amount (expressed as % of ceded premium) that should be subtracted from direct premiums when determining the net premium for ceding to other agreements.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getMarkUp() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(MARKUP_PROP.get());
  }
  
  /**
   * Gets the value of the NotificationThreshold field.
   * At what amount of total incurred loss would the reinsurers like to be notified of individual large losses.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getNotificationThreshold() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(NOTIFICATIONTHRESHOLD_PROP.get());
  }
  
  /**
   * Gets the value of the NotificationThreshold_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getNotificationThreshold_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(NOTIFICATIONTHRESHOLD_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the NotificationThreshold_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getNotificationThreshold_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(NOTIFICATIONTHRESHOLD_CUR_PROP.get());
  }
  
  /**
   * currency for per risk treaty
   * @return 
   */
  public typekey.Currency getPerRiskCurrency() {
    return ((com.guidewire.pc.domain.reinsurance.PerRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.PerRiskPublicMethods")).getPerRiskCurrency();
  }
  
  /**
   * Gets the value of the CountTowardTotalLimit field.
   * This is intended to allow for coverages that provide reinsurance for losses from a single event involving multiple risks (clash cover) but where you are not intending to cover any single risk with a TIV or SI this large.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCountTowardTotalLimit() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(COUNTTOWARDTOTALLIMIT_PROP.get());
  }
  
  /**
   * Gets the value of the FlatPremiumAdjusted field.
   * True if flat premium is adjusted for each participant.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFlatPremiumAdjusted() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(FLATPREMIUMADJUSTED_PROP.get());
  }
  
  /**
   * Sets the value of the CededPremium field.
   */
  public void setCededPremium(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(CEDEDPREMIUM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CededPremium_amt field.
   */
  private void setCededPremium_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(CEDEDPREMIUM_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CededPremium_cur field.
   */
  private void setCededPremium_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(CEDEDPREMIUM_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CountTowardTotalLimit field.
   */
  public void setCountTowardTotalLimit(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(COUNTTOWARDTOTALLIMIT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FlatPremiumAdjusted field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setFlatPremiumAdjusted(java.lang.Boolean value) {
    ((com.guidewire.pc.domain.reinsurance.FacultativePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.FacultativePublicMethods")).setFlatPremiumAdjusted(value);
  }
  
  /**
   * Sets the value of the MarkUp field.
   */
  public void setMarkUp(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(MARKUP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NotificationThreshold field.
   */
  public void setNotificationThreshold(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(NOTIFICATIONTHRESHOLD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NotificationThreshold_amt field.
   */
  private void setNotificationThreshold_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(NOTIFICATIONTHRESHOLD_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NotificationThreshold_cur field.
   */
  private void setNotificationThreshold_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(NOTIFICATIONTHRESHOLD_CUR_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.FacNetExcessOfLossRIAgreementInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.FacNetExcessOfLossRIAgreement.this.__getDelegateManager();
    }
    
    /**
     * Add a coverage group to this entity.
     * @param groupType coverage group for reinsurance
     */
    public typekey.RICoverageGroupType addCoverageGroup(typekey.RICoverageGroupType groupType) {
      return ((gw.api.domain.reinsurance.RICoverageGroupOwner)__getDelegateManager().getImplementation("gw.api.domain.reinsurance.RICoverageGroupOwner")).addCoverageGroup(groupType);
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
     * Adds the given element to the AttachmentInclusions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToAttachmentInclusions(entity.RIAttachmentInclusion element) {
      __getInternalInterface().addArrayElement(ATTACHMENTINCLUSIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToName_L10N_ARRAY(entity.RIAgreement_Name_L10N element) {
      __getInternalInterface().addArrayElement(NAME_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Participants array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToParticipants(entity.AgreementParticipant element) {
      __getInternalInterface().addArrayElement(PARTICIPANTS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Programs array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPrograms(entity.ProgramTreaty element) {
      __getInternalInterface().addArrayElement(PROGRAMS_PROP.get(), element);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void addToRICoverageGroups(entity.AgreementCoverageGroup value) {
      ((com.guidewire.pc.domain.reinsurance.impl.RIAgreementInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.impl.RIAgreementInternalMethods")).addToRICoverageGroups(value);
    }
    
    public void afterEffectiveWindowChanged() {
      ((com.guidewire.pc.domain.reinsurance.impl.FacultativeInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.impl.FacultativeInternalMethods")).afterEffectiveWindowChanged();
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public void beforeInsert() {
      ((com.guidewire.pl.system.bundle.InsertCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.InsertCallback")).beforeInsert();
    }
    
    public void beforeUpdate() {
      ((com.guidewire.pl.system.bundle.UpdateCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.UpdateCallback")).beforeUpdate();
    }
    
    /**
     * The loss amount is applied to the terms of the agreement to
     * determine the correct amount of compensation to pay
     * @param lossAmount - loss amount available for agreement to cede
     * @param grossRetention - gross retention used for quota share and surplus treaties
     * @return amount of coverage paid based on terms of the agreement
     */
    public gw.pl.currency.MonetaryAmount calculateCoverageCeded(gw.pl.currency.MonetaryAmount lossAmount, gw.pl.currency.MonetaryAmount grossRetention) {
      return ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).calculateCoverageCeded(lossAmount, grossRetention);
    }
    
    public java.lang.Integer calculateNextVersion() {
      return ((com.guidewire.pl.domain.persistence.core.impl.VersionableInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal")).calculateNextVersion();
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    /**
     * Returns a clone of this agreement.
     * @param bundle the bundle to create the clone
     * @return the clone
     */
    public entity.RIAgreement clone(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).clone(bundle);
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
    
    public gw.api.reinsurance.RICededPremiumAmount createCeding(gw.api.reinsurance.RICededPremiumContainer premium, gw.api.reinsurance.RIAttachment attachment, int calculationOrder, java.util.List<gw.api.reinsurance.RICededPremiumAmount> priorCedings) {
      return ((gw.api.reinsurance.CedingRecipient)__getDelegateManager().getImplementation("gw.api.reinsurance.CedingRecipient")).createCeding(premium, attachment, calculationOrder, priorCedings);
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
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
     * Gets the value of the AgreementNumber field.
     * The agreement number of this agreement.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAgreementNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(AGREEMENTNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the AmountOfCoverage field.
     * Defines the maximum amount that could be recovered from the agreement.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getAmountOfCoverage() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(AMOUNTOFCOVERAGE_PROP.get());
    }
    
    /**
     * Gets the value of the AmountOfCoverage_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getAmountOfCoverage_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(AMOUNTOFCOVERAGE_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the AmountOfCoverage_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getAmountOfCoverage_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(AMOUNTOFCOVERAGE_CUR_PROP.get());
    }
    
    /**
     * Defines how applicable reinsurance agreements are determined at the time of ceding premiums or
     * recovering on losses.
     * @return the attachment basis of this agreement.
     */
    public typekey.AttachmentBasisType getAttachmentBasis() {
      return ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).getAttachmentBasis();
    }
    
    /**
     * Gets the value of the AttachmentInclusions field.
     * The exclusions/special acceptances for attached risks.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RIAttachmentInclusion[] getAttachmentInclusions() {
      return (entity.RIAttachmentInclusion[])__getInternalInterface().getFieldValue(ATTACHMENTINCLUSIONS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getAttachmentPoint() {
      return ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).getAttachmentPoint();
    }
    
    /**
     * Calculation of attachment point with gross retention adjustment if applicable
     * @param grossRetention - gross retention used for surplus treaties
     * @return attachment point of agreement
     */
    public gw.pl.currency.MonetaryAmount getAttachmentPoint(gw.pl.currency.MonetaryAmount grossRetention) {
      return ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).getAttachmentPoint(grossRetention);
    }
    
    /**
     * Gets the value of the AttachmentPoint_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getAttachmentPoint_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(ATTACHMENTPOINT_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the AttachmentPoint_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getAttachmentPoint_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(ATTACHMENTPOINT_CUR_PROP.get());
    }
    
    /**
     * Returns a list of attached risks taking into account inserted and removed beans in the bundle.
     * Edited beans in the bundle have no affect.
     * @param bundle bundle with any uncommitted changes
     * @return a list of attached risks
     */
    public java.util.List<entity.RIPolicyAttachment> getAttachments(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pc.domain.reinsurance.FacultativePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.FacultativePublicMethods")).getAttachments(bundle);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the Broker field.
     * Defines which broker (if any) helped arrange this agreement.  Useful because communications for collections, payments, etc. may be routed through the broker rather than directly to the reinsurers.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Contact getBroker() {
      return (entity.Contact)__getInternalInterface().getFieldValue(BROKER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBrokerID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(BROKER_PROP.get());
    }
    
    /**
     * Gets the value of the CededPremium field.
     * Defined as an actual amount rather than a rate.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getCededPremium() {
      return ((com.guidewire.pc.domain.reinsurance.FacultativePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.FacultativePublicMethods")).getCededPremium();
    }
    
    /**
     * Gets the value of the CededPremium_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getCededPremium_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(CEDEDPREMIUM_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the CededPremium_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getCededPremium_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(CEDEDPREMIUM_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the CededShare field.
     * Defines percentage ceded to the reinsurer.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getCededShare() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(CEDEDSHARE_PROP.get());
    }
    
    /**
     * Gets the value of the CedingRate field.
     * If a non-proportional treaty is divided among multiple participants, then they will each negotiate a rate for their participation.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getCedingRate() {
      return ((com.guidewire.pc.domain.reinsurance.NonProportionalRIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.NonProportionalRIAgreementPublicMethods")).getCedingRate();
    }
    
    /**
     * Gets the value of the Comments field.
     * A free form note space for the carrier to note any additional terms that are not used by the system but which are important to document to fully describe the agreement.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getComments() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COMMENTS_PROP.get());
    }
    
    /**
     * Gets the value of the Commission field.
     * This is the commission that the carrier will earn from the reinsurers for sending them RI business.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getCommission() {
      return ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).getCommission();
    }
    
    /**
     * 
     * @return the owned Contact
     */
    public entity.Contact getContact() {
      return ((gw.api.contact.ContactOwner)__getDelegateManager().getImplementation("gw.api.contact.ContactOwner")).getContact();
    }
    
    /**
     * Gets the value of the ContactPublicID field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getContactPublicID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONTACTPUBLICID_PROP.get());
    }
    
    /**
     * Return all coverage groups this entity applies to.
     * @return list of coverage groups associated with owner
     */
    public java.util.List<typekey.RICoverageGroupType> getCoverageGroups() {
      return ((gw.api.domain.reinsurance.RICoverageGroupOwner)__getDelegateManager().getImplementation("gw.api.domain.reinsurance.RICoverageGroupOwner")).getCoverageGroups();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getCoverageLimit() {
      return ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).getCoverageLimit();
    }
    
    /**
     * Calculation of coverage limit with gross retention adjustment if applicable
     * @param grossRetention - gross retention used for quota share and surplus treaties
     * @return coverage limit of agreement
     */
    public gw.pl.currency.MonetaryAmount getCoverageLimit(gw.pl.currency.MonetaryAmount grossRetention) {
      return ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).getCoverageLimit(grossRetention);
    }
    
    /**
     * Gets the value of the CoverageLimit_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getCoverageLimit_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(COVERAGELIMIT_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the CoverageLimit_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getCoverageLimit_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(COVERAGELIMIT_CUR_PROP.get());
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
     * Gets the value of the Currency field.
     * Currency associated with the RI contract
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getCurrency() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(CURRENCY_PROP.get());
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
     * currency for facultative
     * @return 
     */
    public typekey.Currency getFacultativeCurrency() {
      return ((com.guidewire.pc.domain.reinsurance.FacultativePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.FacultativePublicMethods")).getFacultativeCurrency();
    }
    
    /**
     * Gets the value of the GNPSubtotal field.
     * Gross Net Premium Subtotal
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.GNPSubtotalType getGNPSubtotal() {
      return (typekey.GNPSubtotalType)__getInternalInterface().getFieldValue(GNPSUBTOTAL_PROP.get());
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
     * Returns the inclusion for the given ririsk.
     * @param risk the ririsk
     * @return the inclusion type
     */
    public typekey.RIAttachmentInclusionType getInclusion(entity.RIRisk risk) {
      return ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).getInclusion(risk);
    }
    
    /**
     * Gets the value of the MarkUp field.
     * Additional amount (expressed as % of ceded premium) that should be subtracted from direct premiums when determining the net premium for ceding to other agreements.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getMarkUp() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(MARKUP_PROP.get());
    }
    
    /**
     * Gets the value of the Name field.
     * The name of this contract.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
    }
    
    /**
     * Gets the value of the Name_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RIAgreement_Name_L10N[] getName_L10N_ARRAY() {
      return (entity.RIAgreement_Name_L10N[])__getInternalInterface().getFieldValue(NAME_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
     */
    public entity.RIAgreement_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.RIAgreement_Name_L10N)__getInternalInterface().getAssociativeArrayValue(property);
    }
    
    /**
     * Gets the value of the NotificationThreshold field.
     * At what amount of total incurred loss would the reinsurers like to be notified of individual large losses.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getNotificationThreshold() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(NOTIFICATIONTHRESHOLD_PROP.get());
    }
    
    /**
     * Gets the value of the NotificationThreshold_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getNotificationThreshold_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(NOTIFICATIONTHRESHOLD_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the NotificationThreshold_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getNotificationThreshold_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(NOTIFICATIONTHRESHOLD_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the Participants field.
     * All reinsurers participate in this agreement.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AgreementParticipant[] getParticipants() {
      return (entity.AgreementParticipant[])__getInternalInterface().getFieldValue(PARTICIPANTS_PROP.get());
    }
    
    /**
     * Gets the value of the PayableBasis field.
     * Payable Basis
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PayableBasisType getPayableBasis() {
      return (typekey.PayableBasisType)__getInternalInterface().getFieldValue(PAYABLEBASIS_PROP.get());
    }
    
    /**
     * currency for per risk treaty
     * @return 
     */
    public typekey.Currency getPerRiskCurrency() {
      return ((com.guidewire.pc.domain.reinsurance.PerRiskPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.PerRiskPublicMethods")).getPerRiskCurrency();
    }
    
    /**
     * Gets the value of the Programs field.
     * All reinsurance programs which include this agreement.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ProgramTreaty[] getPrograms() {
      return (entity.ProgramTreaty[])__getInternalInterface().getFieldValue(PROGRAMS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the RICoverageGroups field.
     * All RI coverage groups this agreement applies to.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AgreementCoverageGroup[] getRICoverageGroups() {
      return (entity.AgreementCoverageGroup[])__getInternalInterface().getFieldValue(RICOVERAGEGROUPS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the Status field.
     * Status of the contract
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ContractStatus getStatus() {
      return (typekey.ContractStatus)__getInternalInterface().getFieldValue(STATUS_PROP.get());
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.RIAgreement getSubtype() {
      return (typekey.RIAgreement)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Returns true if the program has status active.
     * @return boolean value
     */
    public boolean isActive() {
      return ((com.guidewire.pc.domain.reinsurance.RIContractPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIContractPublicMethods")).isActive();
    }
    
    /**
     * Gets the value of the ApplyToGrossRetentionOnly field.
     * Agreement coverage applies up to the gross retention only
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isApplyToGrossRetentionOnly() {
      return ((com.guidewire.pc.domain.reinsurance.NonProportionalRIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.NonProportionalRIAgreementPublicMethods")).isApplyToGrossRetentionOnly();
    }
    
    /**
     * Gets the value of the AttachmentIndexed field.
     * Indicates whether loss costs will be adjusted by an inflation index before determining whether they exceed the attachment point.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isAttachmentIndexed() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ATTACHMENTINDEXED_PROP.get());
    }
    
    /**
     * Gets the value of the CalculateCededPremium field.
     * For some types of ceding calculations, it makes more sense to do aggregate calculations across the entire book of business rather than doing premium transaction-level calculations.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCalculateCededPremium() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CALCULATECEDEDPREMIUM_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCedingRateAdjusted() {
      return ((com.guidewire.pc.domain.reinsurance.NonProportionalRIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.NonProportionalRIAgreementPublicMethods")).isCedingRateAdjusted();
    }
    
    /**
     * Gets the value of the CommissionAdjusted field.
     * True if commission is adjusted for each participant.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCommissionAdjusted() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(COMMISSIONADJUSTED_PROP.get());
    }
    
    /**
     * Gets the value of the CountTowardTotalLimit field.
     * This is intended to allow for coverages that provide reinsurance for losses from a single event involving multiple risks (clash cover) but where you are not intending to cover any single risk with a TIV or SI this large.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCountTowardTotalLimit() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(COUNTTOWARDTOTALLIMIT_PROP.get());
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
    
    /**
     * Gets the value of the FlatPremiumAdjusted field.
     * True if flat premium is adjusted for each participant.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isFlatPremiumAdjusted() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(FLATPREMIUMADJUSTED_PROP.get());
    }
    
    /**
     * Gets the value of the LimitIndexed field.
     * Same concept of adjusting the loss cost as Attachment Indexed but for the Limit.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isLimitIndexed() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(LIMITINDEXED_PROP.get());
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
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    /**
     * Promotes the inclusion for the given ririsk.
     * Previously bound inclusions must be deleted before promoting
     * @param risk the ririsk
     */
    public void promoteInclusion(entity.RIRisk risk) {
      ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).promoteInclusion(risk);
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
     * Remove a coverage group from this entity
     * @param groupType coverage group for reinsurance
     */
    public void removeCoverageGroup(typekey.RICoverageGroupType groupType) {
      ((gw.api.domain.reinsurance.RICoverageGroupOwner)__getDelegateManager().getImplementation("gw.api.domain.reinsurance.RICoverageGroupOwner")).removeCoverageGroup(groupType);
    }
    
    /**
     * Removes the given element from the AttachmentInclusions array. This is achieved by marking the element for removal.
     */
    public void removeFromAttachmentInclusions(entity.RIAttachmentInclusion element) {
      __getInternalInterface().removeArrayElement(ATTACHMENTINCLUSIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the AttachmentInclusions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromAttachmentInclusions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ATTACHMENTINCLUSIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromName_L10N_ARRAY(entity.RIAgreement_Name_L10N element) {
      __getInternalInterface().removeArrayElement(NAME_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromName_L10N_ARRAY(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(NAME_L10N_ARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Participants array. This is achieved by marking the element for removal.
     */
    public void removeFromParticipants(entity.AgreementParticipant element) {
      __getInternalInterface().removeArrayElement(PARTICIPANTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Participants array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromParticipants(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PARTICIPANTS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Programs array. This is achieved by marking the element for removal.
     */
    public void removeFromPrograms(entity.ProgramTreaty element) {
      __getInternalInterface().removeArrayElement(PROGRAMS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Programs array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPrograms(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PROGRAMS_PROP.get(), elementID);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void removeFromRICoverageGroups(entity.AgreementCoverageGroup value) {
      ((com.guidewire.pc.domain.reinsurance.impl.RIAgreementInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.impl.RIAgreementInternalMethods")).removeFromRICoverageGroups(value);
    }
    
    /**
     * Removes the given element from the RICoverageGroups array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRICoverageGroups(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(RICOVERAGEGROUPS_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the AgreementNumber field.
     */
    public void setAgreementNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(AGREEMENTNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AmountOfCoverage field.
     */
    public void setAmountOfCoverage(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(AMOUNTOFCOVERAGE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AmountOfCoverage_amt field.
     */
    public void setAmountOfCoverage_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(AMOUNTOFCOVERAGE_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AmountOfCoverage_cur field.
     */
    public void setAmountOfCoverage_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(AMOUNTOFCOVERAGE_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ApplyToGrossRetentionOnly field.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setApplyToGrossRetentionOnly(java.lang.Boolean value) {
      ((com.guidewire.pc.domain.reinsurance.NonProportionalRIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.NonProportionalRIAgreementPublicMethods")).setApplyToGrossRetentionOnly(value);
    }
    
    /**
     * Sets the value of the AttachmentInclusions field.
     */
    public void setAttachmentInclusions(entity.RIAttachmentInclusion[] value) {
      __getInternalInterface().setFieldValue(ATTACHMENTINCLUSIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AttachmentIndexed field.
     */
    public void setAttachmentIndexed(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ATTACHMENTINDEXED_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setAttachmentPoint(gw.pl.currency.MonetaryAmount value) {
      ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).setAttachmentPoint(value);
    }
    
    /**
     * Sets the value of the AttachmentPoint_amt field.
     */
    public void setAttachmentPoint_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(ATTACHMENTPOINT_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AttachmentPoint_cur field.
     */
    public void setAttachmentPoint_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(ATTACHMENTPOINT_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Broker field.
     */
    public void setBroker(entity.Contact value) {
      __getInternalInterface().setFieldValue(BROKER_PROP.get(), value);
    }
    
    public void setBrokerID(gw.pl.persistence.core.Key value) {
      setFieldValue(BROKER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CalculateCededPremium field.
     */
    public void setCalculateCededPremium(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CALCULATECEDEDPREMIUM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CededPremium field.
     */
    public void setCededPremium(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(CEDEDPREMIUM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CededPremium_amt field.
     */
    public void setCededPremium_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(CEDEDPREMIUM_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CededPremium_cur field.
     */
    public void setCededPremium_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(CEDEDPREMIUM_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CededShare field.
     */
    public void setCededShare(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(CEDEDSHARE_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setCedingRate(java.math.BigDecimal value) {
      ((com.guidewire.pc.domain.reinsurance.NonProportionalRIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.NonProportionalRIAgreementPublicMethods")).setCedingRate(value);
    }
    
    /**
     * Sets the value of the CedingRateAdjusted field.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setCedingRateAdjusted(java.lang.Boolean value) {
      ((com.guidewire.pc.domain.reinsurance.NonProportionalRIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.NonProportionalRIAgreementPublicMethods")).setCedingRateAdjusted(value);
    }
    
    /**
     * Sets the value of the Comments field.
     */
    public void setComments(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COMMENTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Commission field.
     */
    public void setCommission(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(COMMISSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CommissionAdjusted field.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setCommissionAdjusted(java.lang.Boolean value) {
      ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).setCommissionAdjusted(value);
    }
    
    /**
     * 
     * @param contact the owned Contact
     */
    public void setContact(entity.Contact contact) {
      ((gw.api.contact.ContactOwner)__getDelegateManager().getImplementation("gw.api.contact.ContactOwner")).setContact(contact);
    }
    
    /**
     * Sets the value of the ContactPublicID field.
     */
    public void setContactPublicID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CONTACTPUBLICID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CountTowardTotalLimit field.
     */
    public void setCountTowardTotalLimit(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(COUNTTOWARDTOTALLIMIT_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setCoverageLimit(gw.pl.currency.MonetaryAmount value) {
      ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).setCoverageLimit(value);
    }
    
    /**
     * Sets the value of the CoverageLimit_amt field.
     */
    public void setCoverageLimit_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(COVERAGELIMIT_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CoverageLimit_cur field.
     */
    public void setCoverageLimit_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(COVERAGELIMIT_CUR_PROP.get(), value);
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
     * Sets the value of the Currency field.
     */
    public void setCurrency(typekey.Currency value) {
      __getInternalInterface().setFieldValue(CURRENCY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EffectiveDate field.
     */
    public void setEffectiveDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(EFFECTIVEDATE_PROP.get(), value);
    }
    
    /**
     * Set the effective date of the agreement.   The time of day will be normalized.
     * @param effectiveDate Effective date for this agreement.
     */
    public void setEffectiveDateWithDefaultTime(java.util.Date effectiveDate) {
      ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).setEffectiveDateWithDefaultTime(effectiveDate);
    }
    
    /**
     * Sets the value of the ExpirationDate field.
     */
    public void setExpirationDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(EXPIRATIONDATE_PROP.get(), value);
    }
    
    /**
     * Set the effective date of the agreement.   The time of day will be normalized.
     * @param expirationDate Expiration date for this agreement.
     */
    public void setExpirationDateWithDefaultTime(java.util.Date expirationDate) {
      ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).setExpirationDateWithDefaultTime(expirationDate);
    }
    
    /**
     * Sets the value of the FlatPremiumAdjusted field.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setFlatPremiumAdjusted(java.lang.Boolean value) {
      ((com.guidewire.pc.domain.reinsurance.FacultativePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.FacultativePublicMethods")).setFlatPremiumAdjusted(value);
    }
    
    /**
     * Sets the value of the GNPSubtotal field.
     */
    public void setGNPSubtotal(typekey.GNPSubtotalType value) {
      __getInternalInterface().setFieldValue(GNPSUBTOTAL_PROP.get(), value);
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
     * Sets the value of the LimitIndexed field.
     */
    public void setLimitIndexed(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(LIMITINDEXED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MarkUp field.
     */
    public void setMarkUp(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(MARKUP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Name field.
     */
    public void setName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Name_L10N_ARRAY field.
     */
    public void setName_L10N_ARRAY(entity.RIAgreement_Name_L10N[] value) {
      __getInternalInterface().setFieldValue(NAME_L10N_ARRAY_PROP.get(), value);
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
     * Sets the value of the NotificationThreshold field.
     */
    public void setNotificationThreshold(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(NOTIFICATIONTHRESHOLD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NotificationThreshold_amt field.
     */
    public void setNotificationThreshold_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(NOTIFICATIONTHRESHOLD_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NotificationThreshold_cur field.
     */
    public void setNotificationThreshold_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(NOTIFICATIONTHRESHOLD_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Participants field.
     */
    public void setParticipants(entity.AgreementParticipant[] value) {
      __getInternalInterface().setFieldValue(PARTICIPANTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PayableBasis field.
     */
    public void setPayableBasis(typekey.PayableBasisType value) {
      __getInternalInterface().setFieldValue(PAYABLEBASIS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Programs field.
     */
    public void setPrograms(entity.ProgramTreaty[] value) {
      __getInternalInterface().setFieldValue(PROGRAMS_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the RICoverageGroups field.
     */
    public void setRICoverageGroups(entity.AgreementCoverageGroup[] value) {
      __getInternalInterface().setFieldValue(RICOVERAGEGROUPS_PROP.get(), value);
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
     * Sets the value of the Status field.
     */
    public void setStatus(typekey.ContractStatus value) {
      __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.RIAgreement value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
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
    
    /**
     * Update the amount of coverage field.
     * 
     *  Will not do anything if the calculated amount is invalid.
     * 
     *  For most types, amount = Limit - Attachment Point * Share %
     * 	For Proportional Fac, amount = Ceded Amount
     */
    public void updateAmountOfCoverageCeded() {
      ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).updateAmountOfCoverageCeded();
    }
    
    /**
     * Returns the inclusion for the given ririsk.
     * @param risk the ririsk
     * @param inclusion the inclusion value to be stored for this attachment
     */
    public void updateInclusion(entity.RIRisk risk, typekey.RIAttachmentInclusionType inclusion) {
      ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).updateInclusion(risk, inclusion);
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods", "com.guidewire.pc.domain.product.impl.SimpleEffDatedImpl");
    config.put("com.guidewire.pc.domain.reinsurance.FacNetExcessOfLossRIAgreementPublicMethods", "com.guidewire.pc.domain.reinsurance.impl.FacNetExcessOfLossRIAgreementImpl");
    config.put("com.guidewire.pc.domain.reinsurance.FacultativePublicMethods", "com.guidewire.pc.domain.reinsurance.impl.FacultativeImpl");
    config.put("com.guidewire.pc.domain.reinsurance.NonProportionalRIAgreementPublicMethods", "com.guidewire.pc.domain.reinsurance.impl.FacNetExcessOfLossRIAgreementImpl");
    config.put("com.guidewire.pc.domain.reinsurance.PerRiskPublicMethods", "com.guidewire.pc.domain.reinsurance.impl.PerRiskImpl");
    config.put("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods", "com.guidewire.pc.domain.reinsurance.impl.FacNetExcessOfLossRIAgreementImpl");
    config.put("com.guidewire.pc.domain.reinsurance.RIContractPublicMethods", "com.guidewire.pc.domain.reinsurance.impl.RIContractImpl");
    config.put("com.guidewire.pc.domain.reinsurance.impl.FacultativeInternalMethods", "com.guidewire.pc.domain.reinsurance.impl.FacultativeImpl");
    config.put("com.guidewire.pc.domain.reinsurance.impl.RIAgreementInternalMethods", "com.guidewire.pc.domain.reinsurance.impl.FacNetExcessOfLossRIAgreementImpl");
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
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.pc.domain.reinsurance.impl.FacNetExcessOfLossRIAgreementImpl");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.pc.domain.reinsurance.impl.FacNetExcessOfLossRIAgreementImpl");
    config.put("gw.api.contact.ContactOwner", "com.guidewire.pc.domain.reinsurance.impl.FacNetExcessOfLossRIAgreementImpl");
    config.put("gw.api.domain.reinsurance.RICoverageGroupOwner", "com.guidewire.pc.domain.reinsurance.impl.FacNetExcessOfLossRIAgreementImpl");
    config.put("gw.api.reinsurance.CedingRecipient", "gw.plugin.reinsurance.FacNXOLCedingRecipientAdapter");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.FacNetExcessOfLossRIAgreement.class, config);
    com.guidewire._generated.entity.FacNetExcessOfLossRIAgreementInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.FacNetExcessOfLossRIAgreement, com.guidewire._generated.entity.FacNetExcessOfLossRIAgreementInternal>() {
      public java.lang.Object getImplementation(entity.FacNetExcessOfLossRIAgreement bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.FacNetExcessOfLossRIAgreementInternal getInternalInterface(entity.FacNetExcessOfLossRIAgreement bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.FacNetExcessOfLossRIAgreement newEmptyInstance() {
        return new entity.FacNetExcessOfLossRIAgreement((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}