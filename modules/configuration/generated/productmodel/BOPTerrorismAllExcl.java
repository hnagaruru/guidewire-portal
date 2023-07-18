package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPTerrorismAllExcl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPTerrorismAllExcl extends entity.BusinessOwnersExcl {
  protected BOPTerrorismAllExcl()  {
    super((java.lang.Void)null);
  }
  
  public BOPTerrorismAllExcl(entity.PolicyPeriod branch)  {
    super(branch, "BOPTerrorismAllExcl");
  }
  
  public BOPTerrorismAllExcl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPTerrorismAllExcl");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPTerrorismAllExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPTerrorismAllExcl>() {
      public productmodel.BOPTerrorismAllExcl newEmptyInstance() {
        return new productmodel.BOPTerrorismAllExcl();
      }
      
      
    });
  }
}