package entity;

/**
 * SimpleEffDated
 * Delegate that can be implemented for things that have effective and expiration dates but are not revisioned.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "SimpleEffDated.eti;SimpleEffDated.eix;SimpleEffDated.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface SimpleEffDated extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.SimpleEffDated> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.SimpleEffDated>("entity.SimpleEffDated");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEDATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("EffectiveDate", "EffectiveDate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIRATIONDATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ExpirationDate", "ExpirationDate");
  
  /**
   * Gets the value of the EffectiveDate field.
   * Effective date of this row.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveDate();
  
  
  /**
   * Gets the value of the ExpirationDate field.
   * Expiration date of this row or NULL in the database if this row never expires.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpirationDate();
  
  
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
   * Sets the value of the EffectiveDate field.
   */
  public void setEffectiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ExpirationDate field.
   */
  public void setExpirationDate(java.util.Date value);
  
  
  
}