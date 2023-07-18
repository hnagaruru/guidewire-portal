package entity;

/**
 * PerRisk
 * Per-Risk Reinsurance Agreement.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PerRisk.eti;PerRisk.eix;PerRisk.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface PerRisk extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.PerRisk> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.PerRisk>("entity.PerRisk");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COUNTTOWARDTOTALLIMIT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("CountTowardTotalLimit", "CountTowardTotalLimit");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> NOTIFICATIONTHRESHOLD_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("NotificationThreshold", "NotificationThreshold");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NOTIFICATIONTHRESHOLD_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("NotificationThreshold_amt", "NotificationThreshold");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> NOTIFICATIONTHRESHOLD_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("NotificationThreshold_cur", "NotificationThreshold_cur");
  
  /**
   * Gets the value of the NotificationThreshold field.
   * At what amount of total incurred loss would the reinsurers like to be notified of individual large losses.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getNotificationThreshold();
  
  
  /**
   * Gets the value of the NotificationThreshold_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getNotificationThreshold_amt();
  
  
  /**
   * Gets the value of the NotificationThreshold_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getNotificationThreshold_cur();
  
  
  /**
   * currency for per risk treaty
   * @return 
   */
  public typekey.Currency getPerRiskCurrency();
  
  
  /**
   * Gets the value of the CountTowardTotalLimit field.
   * This is intended to allow for coverages that provide reinsurance for losses from a single event involving multiple risks (clash cover) but where you are not intending to cover any single risk with a TIV or SI this large.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCountTowardTotalLimit();
  
  
  /**
   * Sets the value of the CountTowardTotalLimit field.
   */
  public void setCountTowardTotalLimit(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the NotificationThreshold field.
   */
  public void setNotificationThreshold(gw.pl.currency.MonetaryAmount value);
  
  
  
}