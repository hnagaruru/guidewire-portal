package entity;

/**
 * Clause
 * 
 *     Common interface for Coverages, Exclusions, and PolicyConditions.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Clause.eti;Clause.eix;Clause.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface Clause extends entity.EffDated, gw.api.domain.Clause {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Clause> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Clause>("entity.Clause");
  
  
}