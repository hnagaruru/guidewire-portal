package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCFormAssociation.eti;WCFormAssociation.eix;WCFormAssociation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCFormAssociationVersionList extends entity.windowed.FormAssociationVersionList {
  entity.WCFormAssociation AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCFormAssociation> getAllVersions();
  
  
  
}