package entity;

/**
 * RIContract
 * Delegate for Reinsurance Agreement and Program.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RIContract.eti;RIContract.eix;RIContract.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface RIContract extends entity.SimpleEffDated {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RIContract> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RIContract>("entity.RIContract");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CURRENCY_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("Currency", "Currency");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATUS_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("Status", "Status");
  
  /**
   * Gets the value of the Currency field.
   * Currency associated with the RI contract
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCurrency();
  
  
  /**
   * Gets the value of the Status field.
   * Status of the contract
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContractStatus getStatus();
  
  
  /**
   * Returns true if the program has status active.
   * @return boolean value
   */
  public boolean isActive();
  
  
  /**
   * Returns true if this is effective for the given period.
   * @param start start of the period
   * @param end end of the period
   * @return true if effective window overlaps given dates, false otherwise
   */
  public boolean isEffective(java.util.Date start, java.util.Date end);
  
  
  /**
   * Returns true if this is effective at the given date.
   * @param date the date to check
   * @return true if this is effective at given date, false otherwise
   */
  public boolean isEffectiveAt(java.util.Date date);
  
  
  /**
   * Returns true if the effective window of this overlaps with the effective window of other.
   * @param other the other eff dated
   * @return true if the effective windows of this and other overlap, false otherwise.
   */
  public boolean isOverlap(entity.SimpleEffDated other);
  
  
  /**
   * Sets the value of the Currency field.
   */
  public void setCurrency(typekey.Currency value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.ContractStatus value);
  
  
  
}