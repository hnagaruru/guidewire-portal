package entity;

/**
 * NonProportionalRIAgreement
 * 
 *     Non-proportional reinsurance agreement.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "NonProportionalRIAgreement.eti;NonProportionalRIAgreement.eix;NonProportionalRIAgreement.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class NonProportionalRIAgreement extends entity.RIAgreement {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.NonProportionalRIAgreement> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.NonProportionalRIAgreement>("entity.NonProportionalRIAgreement");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> APPLYTOGROSSRETENTIONONLY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ApplyToGrossRetentionOnly");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ATTACHMENTINDEXED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AttachmentIndexed");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CALCULATECEDEDPREMIUM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CalculateCededPremium");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDINGRATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CedingRate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDINGRATEADJUSTED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CedingRateAdjusted");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> GNPSUBTOTAL_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "GNPSubtotal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LIMITINDEXED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LimitIndexed");
  
  protected NonProportionalRIAgreement(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected abstract com.guidewire._generated.entity.NonProportionalRIAgreementInternal __createInternalInterface();
  
  
  protected com.guidewire._generated.entity.NonProportionalRIAgreementInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.NonProportionalRIAgreementInternal)super.__getInternalInterface();
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
   * Gets the value of the GNPSubtotal field.
   * Gross Net Premium Subtotal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GNPSubtotalType getGNPSubtotal() {
    return (typekey.GNPSubtotalType)__getInternalInterface().getFieldValue(GNPSUBTOTAL_PROP.get());
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
   * Gets the value of the LimitIndexed field.
   * Same concept of adjusting the loss cost as Attachment Indexed but for the Limit.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLimitIndexed() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(LIMITINDEXED_PROP.get());
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
   * Sets the value of the AttachmentIndexed field.
   */
  public void setAttachmentIndexed(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(ATTACHMENTINDEXED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CalculateCededPremium field.
   */
  public void setCalculateCededPremium(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(CALCULATECEDEDPREMIUM_PROP.get(), value);
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
   * Sets the value of the GNPSubtotal field.
   */
  public void setGNPSubtotal(typekey.GNPSubtotalType value) {
    __getInternalInterface().setFieldValue(GNPSUBTOTAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LimitIndexed field.
   */
  public void setLimitIndexed(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(LIMITINDEXED_PROP.get(), value);
  }
  
  static {
    com.guidewire._generated.entity.NonProportionalRIAgreementInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.NonProportionalRIAgreement, com.guidewire._generated.entity.NonProportionalRIAgreementInternal>() {
      public java.lang.Object getImplementation(entity.NonProportionalRIAgreement bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.NonProportionalRIAgreementInternal getInternalInterface(entity.NonProportionalRIAgreement bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}