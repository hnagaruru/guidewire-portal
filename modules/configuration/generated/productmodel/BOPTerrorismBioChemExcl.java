package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPTerrorismBioChemExcl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPTerrorismBioChemExcl extends entity.BusinessOwnersExcl {
  protected BOPTerrorismBioChemExcl()  {
    super((java.lang.Void)null);
  }
  
  public BOPTerrorismBioChemExcl(entity.PolicyPeriod branch)  {
    super(branch, "BOPTerrorismBioChemExcl");
  }
  
  public BOPTerrorismBioChemExcl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPTerrorismBioChemExcl");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPTerrorismBioChemExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPTerrorismBioChemExcl>() {
      public productmodel.BOPTerrorismBioChemExcl newEmptyInstance() {
        return new productmodel.BOPTerrorismBioChemExcl();
      }
      
      
    });
  }
}