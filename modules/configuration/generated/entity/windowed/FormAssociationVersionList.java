package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormAssociation.eti;FormAssociation.eix;FormAssociation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface FormAssociationVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.FormAssociation AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.FormAssociation> getAllVersions();
  
  
  
}