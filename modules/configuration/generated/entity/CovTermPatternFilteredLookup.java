package entity;

/**
 * CovTermPatternFilteredLookup
 * Delegate for availability lookup entities where covterm pattern code is a required restriction.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CovTermPatternFilteredLookup.eti;CovTermPatternFilteredLookup.eix;CovTermPatternFilteredLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface CovTermPatternFilteredLookup extends gw.pl.persistence.core.Bean, com.guidewire.pc.domain.productmodel.DenormLookupInitialisable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.CovTermPatternFilteredLookup> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.CovTermPatternFilteredLookup>("entity.CovTermPatternFilteredLookup");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COVTERMPATTERNCODE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("CovTermPatternCode", "CovTermPatternCode");
  
  /**
   * Gets the value of the CovTermPatternCode field.
   * The covterm pattern code for which this lookup applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCovTermPatternCode();
  
  
  
}