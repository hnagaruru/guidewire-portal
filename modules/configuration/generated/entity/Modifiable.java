package entity;

/**
 * Modifiable
 * 
 *     Delegate that can be implemented by any entity that has modifiers.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Modifiable.eti;Modifiable.eix;Modifiable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface Modifiable extends entity.EffDated {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Modifiable> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Modifiable>("entity.Modifiable");
  
  /**
   * Checks modifiers on this Modifiable instance against the product model and returns the resulting sync issues.
   * None of the fix actions involved will be taken at this point; this will just return information about any
   * potential problems.
   * @return a list of ProductModelSyncIssues
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkModifiersAgainstProductModel();
  
  
  /**
   * Sets this Modifiable's internal reference date field to null so {@link #getModifiableReferenceDate()}
   * will compute the reference date based on the current policy data, rather than returning the
   * persisted field's value. This is meant to be called only upon creating a new policy term (e.g.,
   * in a renewal job), when the reference dates must be recalculated.
   */
  public void clearModifiableReferenceDateInternal();
  
  
  /**
   * Stores the current value of {@link #getModifiableReferenceDate()} in this Modifiable's internal
   * reference date field if that field is currently null, and does nothing otherwise. This should
   * be called only upon binding a policy period.
   */
  public void denormalizeModifiableReferenceDate();
  
  
  /**
   * Returns the policy line that this modifiable belongs to.
   * @return the policy line of this modifiable
   */
  public entity.PolicyLine getModifiableLine();
  
  
  /**
   * Returns the policy period that this modifiable belongs to.
   * @return the policy period of this modifiable
   */
  public entity.PolicyPeriod getModifiablePolicyPeriod();
  
  
  /**
   * Returns the reference date of this Modifiable object. This will be the internally persisted
   * reference date (see {@link gw.api.domain.ModifiableAdapter#getReferenceDateInternal()} if
   * that is not null. Otherwise it will be calculated based on the Modifiable's policy line and
   * state.
   * @return the reference date of this modifiable
   */
  public java.util.Date getModifiableReferenceDate();
  
  
  /**
   * 
   * @return the state of this modifiable
   */
  public typekey.Jurisdiction getModifiableState();
  
  
  /**
   * Finds a Modifier of the given pattern on this Modifiable.
   * @param pattern Pattern of modifier to retrieve
   * @return Modifier that matches the criteria or <code>null</code> if none found
   */
  public entity.Modifier getModifier(gw.api.productmodel.ModifierPatternBase pattern);
  
  
  /**
   * Finds a Modifier on this Modifiable based on the given pattern code.
   * @param modifierPatternCode Public ID of the Modifier to find
   * @return Modifier that matches the criteria or <code>null</code> if none found
   */
  public entity.Modifier getModifier(java.lang.String modifierPatternCode);
  
  
  /**
   * Returns the modifiers that are on this Modifiable. This method allow common access to
   * modifiers on Modifiable entities. However, it may be more efficient to use a similar method on the
   * Modifiable implementor that returns a specific subtype of Modifier.
   * @return Modifier[] Modifiers held by this Modifiable; may be empty array, but should not be null
   */
  public entity.Modifier[] getModifiers();
  
  
  /**
   * Synchronizes modifiers on this Modifiable instance with the product model, adding and removing them
   * as necessary to match pattern changes and availability conditions.
   * @return a list of ProductModelSyncIssues
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> updateModifiers();
  
  
  
}