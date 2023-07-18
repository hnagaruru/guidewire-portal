package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPTerrorismLtdExcl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPTerrorismLtdExcl extends entity.BusinessOwnersExcl {
  protected BOPTerrorismLtdExcl()  {
    super((java.lang.Void)null);
  }
  
  public BOPTerrorismLtdExcl(entity.PolicyPeriod branch)  {
    super(branch, "BOPTerrorismLtdExcl");
  }
  
  public BOPTerrorismLtdExcl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPTerrorismLtdExcl");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPTerrorismLtdExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPTerrorismLtdExcl>() {
      public productmodel.BOPTerrorismLtdExcl newEmptyInstance() {
        return new productmodel.BOPTerrorismLtdExcl();
      }
      
      
    });
  }
}