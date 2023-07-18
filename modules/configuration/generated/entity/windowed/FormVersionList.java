package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Form.eti;Form.eix;Form.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface FormVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.Form AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.FormAssociation> FormAssociationsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.FormEdgeTable> SupersededFormsAsOf(java.util.Date date);
  
  
  void addToFormAssociations(entity.FormAssociation bean);
  
  
  void addToSupersededForms(entity.FormEdgeTable bean);
  
  
  java.util.List<? extends entity.Form> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.FormAssociationVersionList> getFormAssociations();
  
  
  java.util.List<? extends entity.windowed.FormEdgeTableVersionList> getSupersededForms();
  
  
  
}