package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Form.eti;Form.eix;Form.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FormInternal extends com.guidewire._generated.entity.EffDatedInternal {
  /**
   * Adds the given element to the FormAssociations array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFormAssociations(entity.FormAssociation element);
  
  
  /**
   * Adds the given element to the SupersededForms array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSupersededForms(entity.FormEdgeTable element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Form getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the EndorsementNumber field.
   * The endorsement number of this form.  This field will be null for non-contract forms.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getEndorsementNumber();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Form getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the FormAssociations field.
   * The list of associations between this form and entities within the policy graph.  In general, these associations should only be used to in the case where multiple copies of a given form are issued and a way is needed to match up a given Form instance to the entity it's associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormAssociation[] getFormAssociations();
  
  
  /**
   * Gets the value of the FormDescription field.
   * A short description of what the form should hold.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFormDescription();
  
  
  /**
   * Gets the value of the FormNumber field.
   * The form number to show in the list of forms.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFormNumber();
  
  
  /**
   * Gets the value of the FormPatternCode field.
   * The public-id of the FormPattern associated with this form.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFormPatternCode();
  
  
  /**
   * Gets the value of the FormTextData field.
   * The text for this form, which is stored independently so it's only loaded when necessary and not every time forms are queried, requested, or displayed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormTextData getFormTextData();
  
  
  public gw.pl.persistence.core.Key getFormTextDataID();
  
  
  /**
   * Gets the value of the InferenceTime field.
   * When the form was inferred.  We track this so that the bind process will only re-infer bind-time forms but will leave quote-time forms alone.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FormInferenceTime getInferenceTime();
  
  
  /**
   * Gets the value of the InternalFormEffDate field.
   * The date on which the form became effective.  This column will be null if the form was effective as of the period start date.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getInternalFormEffDate();
  
  
  /**
   * Gets the value of the InternalFormExpDate field.
   * The date on which the form ceases to be effective. This may be superseded by the InternalFormRemovalDate column.  This column will be null if the form expires on the period end date.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getInternalFormExpDate();
  
  
  /**
   * Gets the value of the InternalFormRemovalDate field.
   * The date on which the form was removed or superseded.  If the RemovedOrSuperseded field is set to true, a null here means that the form was removed or superseded as of the period start date.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getInternalFormRemovalDate();
  
  
  /**
   * Gets the value of the SupersededForms field.
   * An array of size 0 or 1 that links this form to the form it superseded, if any.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormEdgeTable[] getSupersededForms();
  
  
  /**
   * Gets the value of the RemovedOrSuperseded field.
   * Whether or not the form has been removed or superseded.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isRemovedOrSuperseded();
  
  
  /**
   * Removes the given element from the FormAssociations array. This is achieved by marking the element for removal.
   */
  public void removeFromFormAssociations(entity.FormAssociation element);
  
  
  /**
   * Removes the given element from the FormAssociations array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFormAssociations(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the SupersededForms array. This is achieved by marking the element for removal.
   */
  public void removeFromSupersededForms(entity.FormEdgeTable element);
  
  
  /**
   * Removes the given element from the SupersededForms array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSupersededForms(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.Form value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the EndorsementNumber field.
   */
  public void setEndorsementNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.Form value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the FormAssociations field.
   */
  public void setFormAssociations(entity.FormAssociation[] value);
  
  
  /**
   * Sets the value of the FormDescription field.
   */
  public void setFormDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the FormNumber field.
   */
  public void setFormNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the FormPatternCode field.
   */
  public void setFormPatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the FormTextData field.
   */
  public void setFormTextData(entity.FormTextData value);
  
  
  public void setFormTextDataID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the InferenceTime field.
   */
  public void setInferenceTime(typekey.FormInferenceTime value);
  
  
  /**
   * Sets the value of the InternalFormEffDate field.
   */
  public void setInternalFormEffDate(java.util.Date value);
  
  
  /**
   * Sets the value of the InternalFormExpDate field.
   */
  public void setInternalFormExpDate(java.util.Date value);
  
  
  /**
   * Sets the value of the InternalFormRemovalDate field.
   */
  public void setInternalFormRemovalDate(java.util.Date value);
  
  
  /**
   * Sets the value of the RemovedOrSuperseded field.
   */
  public void setRemovedOrSuperseded(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the SupersededForms field.
   */
  public void setSupersededForms(entity.FormEdgeTable[] value);
  
  
  
}