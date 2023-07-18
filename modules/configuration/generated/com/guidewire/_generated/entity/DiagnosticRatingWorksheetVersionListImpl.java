package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DiagnosticRatingWorksheet.eti;DiagnosticRatingWorksheet.eix;DiagnosticRatingWorksheet.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class DiagnosticRatingWorksheetVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.DiagnosticRatingWorksheetVersionList {
  public DiagnosticRatingWorksheetVersionListImpl(entity.DiagnosticRatingWorksheet base)  {
    super(base);
  }
  
  public DiagnosticRatingWorksheetVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.DiagnosticRatingWorksheet AsOf(java.util.Date date) {
    return (entity.DiagnosticRatingWorksheet)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DiagRatingWorksheetRef> EntityReferencesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.DiagnosticRatingWorksheet.ENTITYREFERENCES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToEntityReferences(entity.DiagRatingWorksheetRef bean) {
    addToArray(entity.DiagnosticRatingWorksheet.ENTITYREFERENCES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DiagnosticRatingWorksheet> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.DiagRatingWorksheetRefVersionList> getEntityReferences() {
    return (java.util.List)getArray(entity.DiagnosticRatingWorksheet.ENTITYREFERENCES_PROP.get());
  }
  
  
}