package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPCert_BioChemExcl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPCert_BioChemExcl extends entity.BusinessOwnersExcl {
  protected BOPCert_BioChemExcl()  {
    super((java.lang.Void)null);
  }
  
  public BOPCert_BioChemExcl(entity.PolicyPeriod branch)  {
    super(branch, "BOPCert_BioChemExcl");
  }
  
  public BOPCert_BioChemExcl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPCert_BioChemExcl");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPCert_BioChemExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPCert_BioChemExcl>() {
      public productmodel.BOPCert_BioChemExcl newEmptyInstance() {
        return new productmodel.BOPCert_BioChemExcl();
      }
      
      
    });
  }
}