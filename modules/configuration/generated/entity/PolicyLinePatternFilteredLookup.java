package entity;

/**
 * PolicyLinePatternFilteredLookup
 * Delegate for availability lookup entities where policy line pattern code is a required restriction.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyLinePatternFilteredLookup.eti;PolicyLinePatternFilteredLookup.eix;PolicyLinePatternFilteredLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface PolicyLinePatternFilteredLookup extends gw.pl.persistence.core.Bean, com.guidewire.pc.domain.productmodel.DenormLookupInitialisable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.PolicyLinePatternFilteredLookup> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.PolicyLinePatternFilteredLookup>("entity.PolicyLinePatternFilteredLookup");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLICYLINEPATTERNCODE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("PolicyLinePatternCode", "PolicyLinePatternCode");
  
  /**
   * Gets the value of the PolicyLinePatternCode field.
   * The policy line pattern code for which this lookup applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyLinePatternCode();
  
  
  
}