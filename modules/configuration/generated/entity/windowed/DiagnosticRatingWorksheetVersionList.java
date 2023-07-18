package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DiagnosticRatingWorksheet.eti;DiagnosticRatingWorksheet.eix;DiagnosticRatingWorksheet.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface DiagnosticRatingWorksheetVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.DiagnosticRatingWorksheet AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DiagRatingWorksheetRef> EntityReferencesAsOf(java.util.Date date);
  
  
  void addToEntityReferences(entity.DiagRatingWorksheetRef bean);
  
  
  java.util.List<? extends entity.DiagnosticRatingWorksheet> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.DiagRatingWorksheetRefVersionList> getEntityReferences();
  
  
  
}