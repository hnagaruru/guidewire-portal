package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Form.eti;Form.eix;Form.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class FormVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.FormVersionList {
  public FormVersionListImpl(entity.Form base)  {
    super(base);
  }
  
  public FormVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.Form AsOf(java.util.Date date) {
    return (entity.Form)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.FormAssociation> FormAssociationsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.Form.FORMASSOCIATIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.FormEdgeTable> SupersededFormsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.Form.SUPERSEDEDFORMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToFormAssociations(entity.FormAssociation bean) {
    addToArray(entity.Form.FORMASSOCIATIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToSupersededForms(entity.FormEdgeTable bean) {
    addToArray(entity.Form.SUPERSEDEDFORMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.Form> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.FormAssociationVersionList> getFormAssociations() {
    return (java.util.List)getArray(entity.Form.FORMASSOCIATIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.FormEdgeTableVersionList> getSupersededForms() {
    return (java.util.List)getArray(entity.Form.SUPERSEDEDFORMS_PROP.get());
  }
  
  
}