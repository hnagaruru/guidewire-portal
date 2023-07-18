package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPCertTerrorismExcl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPCertTerrorismExcl extends entity.BusinessOwnersExcl {
  protected BOPCertTerrorismExcl()  {
    super((java.lang.Void)null);
  }
  
  public BOPCertTerrorismExcl(entity.PolicyPeriod branch)  {
    super(branch, "BOPCertTerrorismExcl");
  }
  
  public BOPCertTerrorismExcl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPCertTerrorismExcl");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPCertTerrorismExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPCertTerrorismExcl>() {
      public productmodel.BOPCertTerrorismExcl newEmptyInstance() {
        return new productmodel.BOPCertTerrorismExcl();
      }
      
      
    });
  }
}