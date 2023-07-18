package entity;

/**
 * Treaty
 * Reinsurance Treaty.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Treaty.eti;Treaty.eix;Treaty.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface Treaty extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Treaty> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Treaty>("entity.Treaty");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> DEPOSITPAYMENTSCHEDULE_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("DepositPaymentSchedule", "DepositPaymentSchedule");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> MINDEPOSITPREMIUM_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("MinDepositPremium", "MinDepositPremium");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MINDEPOSITPREMIUM_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("MinDepositPremium_amt", "MinDepositPremium");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> MINDEPOSITPREMIUM_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("MinDepositPremium_cur", "MinDepositPremium_cur");
  
  /**
   * Gets the value of the DepositPaymentSchedule field.
   * Deposit Payment Schedule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DepPmntScheduleType getDepositPaymentSchedule();
  
  
  /**
   * Gets the value of the MinDepositPremium field.
   * Minimum premium that will be due for the contract regardless of any per risk calc of ceded premiums.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getMinDepositPremium();
  
  
  /**
   * Gets the value of the MinDepositPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getMinDepositPremium_amt();
  
  
  /**
   * Gets the value of the MinDepositPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getMinDepositPremium_cur();
  
  
  /**
   * currency for treaty
   * @return 
   */
  public typekey.Currency getTreatyCurrency();
  
  
  /**
   * Sets the value of the DepositPaymentSchedule field.
   */
  public void setDepositPaymentSchedule(typekey.DepPmntScheduleType value);
  
  
  /**
   * Sets the value of the MinDepositPremium field.
   */
  public void setMinDepositPremium(gw.pl.currency.MonetaryAmount value);
  
  
  
}