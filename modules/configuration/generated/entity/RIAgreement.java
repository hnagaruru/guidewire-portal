package entity;

/**
 * RIAgreement
 * A reinsurance agreement between insurance companies
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RIAgreement.eti;RIAgreement.eix;RIAgreement.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class RIAgreement extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.RIContract, entity.EventAware, gw.api.contact.ContactOwner, gw.api.domain.reinsurance.RICoverageGroupOwner, gw.api.reinsurance.CedingRecipient {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RIAgreement> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RIAgreement>("entity.RIAgreement");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AGREEMENTNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AgreementNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> AMOUNTOFCOVERAGE_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "AmountOfCoverage");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AMOUNTOFCOVERAGE_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AmountOfCoverage_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> AMOUNTOFCOVERAGE_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AmountOfCoverage_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ATTACHMENTINCLUSIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "AttachmentInclusions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> ATTACHMENTPOINT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "AttachmentPoint");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ATTACHMENTPOINT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AttachmentPoint_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ATTACHMENTPOINT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AttachmentPoint_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BROKER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Broker");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEDSHARE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CededShare");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMMENTS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Comments");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMMISSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Commission");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMMISSIONADJUSTED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CommissionAdjusted");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CONTACTPUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ContactPublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> COVERAGELIMIT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "CoverageLimit");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COVERAGELIMIT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CoverageLimit_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> COVERAGELIMIT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "CoverageLimit_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CURRENCY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Currency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIRATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpirationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Name");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> NAME_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Name_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PARTICIPANTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Participants");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PAYABLEBASIS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PayableBasis");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PROGRAMS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Programs");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> RICOVERAGEGROUPS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "RICoverageGroups");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Status");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.RIAgreementInternal _internal;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  public static final java.lang.String RIAGREEMENTADDED_EVENT = "RIAgreementAdded";
  
  public static final java.lang.String RIAGREEMENTCHANGED_EVENT = "RIAgreementChanged";
  
  public static final java.lang.String RIAGREEMENTREMOVED_EVENT = "RIAgreementRemoved";
  
  protected RIAgreement(java.lang.Void ignored)  {
    
  }
  
  protected abstract com.guidewire._generated.entity.RIAgreementInternal __createInternalInterface();
  
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected abstract com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap();
  
  
  protected com.guidewire._generated.entity.RIAgreementInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Add a coverage group to this entity.
   * @param groupType coverage group for reinsurance
   */
  public typekey.RICoverageGroupType addCoverageGroup(typekey.RICoverageGroupType groupType) {
    return ((gw.api.domain.reinsurance.RICoverageGroupOwner)__getDelegateManager().getImplementation("gw.api.domain.reinsurance.RICoverageGroupOwner")).addCoverageGroup(groupType);
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
  
  /**
   * Returns a clone of this agreement.
   * @param bundle the bundle to create the clone
   * @return the clone
   */
  public entity.RIAgreement clone(gw.pl.persistence.core.Bundle bundle) {
    return ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).clone(bundle);
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
  
  /**
   * Gets the value of the CededShare field.
   * Defines percentage ceded to the reinsurer.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCededShare() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(CEDEDSHARE_PROP.get());
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
  
  /**
   * Gets the value of the ExpirationDate field.
   * Expiration date of this row or NULL in the database if this row never expires.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpirationDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EXPIRATIONDATE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
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
   * Gets the value of the Name field.
   * The name of this contract.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIAgreement_Name_L10N[] getName_L10N_ARRAY() {
    return (entity.RIAgreement_Name_L10N[])__getInternalInterface().getFieldValue(NAME_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array Name_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Name_en_US"));
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
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AgreementCoverageGroup[] getRICoverageGroups() {
    return (entity.AgreementCoverageGroup[])__getInternalInterface().getFieldValue(RICOVERAGEGROUPS_PROP.get());
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
  
  /**
   * Returns true if the program has status active.
   * @return boolean value
   */
  public boolean isActive() {
    return ((com.guidewire.pc.domain.reinsurance.RIContractPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIContractPublicMethods")).isActive();
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
   * Promotes the inclusion for the given ririsk.
   * Previously bound inclusions must be deleted before promoting
   * @param risk the ririsk
   */
  public void promoteInclusion(entity.RIRisk risk) {
    ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).promoteInclusion(risk);
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
  private void setAmountOfCoverage_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(AMOUNTOFCOVERAGE_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AmountOfCoverage_cur field.
   */
  private void setAmountOfCoverage_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(AMOUNTOFCOVERAGE_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AttachmentInclusions field.
   */
  public void setAttachmentInclusions(entity.RIAttachmentInclusion[] value) {
    __getInternalInterface().setFieldValue(ATTACHMENTINCLUSIONS_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setAttachmentPoint(gw.pl.currency.MonetaryAmount value) {
    ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).setAttachmentPoint(value);
  }
  
  /**
   * Sets the value of the AttachmentPoint_amt field.
   */
  private void setAttachmentPoint_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(ATTACHMENTPOINT_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AttachmentPoint_cur field.
   */
  private void setAttachmentPoint_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(ATTACHMENTPOINT_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Broker field.
   */
  public void setBroker(entity.Contact value) {
    __getInternalInterface().setFieldValue(BROKER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CededShare field.
   */
  public void setCededShare(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(CEDEDSHARE_PROP.get(), value);
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
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setCoverageLimit(gw.pl.currency.MonetaryAmount value) {
    ((com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIAgreementPublicMethods")).setCoverageLimit(value);
  }
  
  /**
   * Sets the value of the CoverageLimit_amt field.
   */
  private void setCoverageLimit_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(COVERAGELIMIT_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CoverageLimit_cur field.
   */
  private void setCoverageLimit_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(COVERAGELIMIT_CUR_PROP.get(), value);
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
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
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
  private void setName_L10N_ARRAY(entity.RIAgreement_Name_L10N[] value) {
    __getInternalInterface().setFieldValue(NAME_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key Name_ on array Name_L10N_ARRAY
   */
  public void setName_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Name_en_US"), value);
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
  private void setRICoverageGroups(entity.AgreementCoverageGroup[] value) {
    __getInternalInterface().setFieldValue(RICOVERAGEGROUPS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
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
  private void setSubtype(typekey.RIAgreement value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
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
  
  static {
    com.guidewire._generated.entity.RIAgreementInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.RIAgreement, com.guidewire._generated.entity.RIAgreementInternal>() {
      public java.lang.Object getImplementation(entity.RIAgreement bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.RIAgreementInternal getInternalInterface(entity.RIAgreement bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}