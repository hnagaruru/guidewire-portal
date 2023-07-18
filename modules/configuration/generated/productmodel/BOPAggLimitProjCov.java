package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPAggLimitProjCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPAggLimitProjCov extends entity.BusinessOwnersCov {
  protected BOPAggLimitProjCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPAggLimitProjCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPAggLimitProjCov");
  }
  
  public BOPAggLimitProjCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPAggLimitProjCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPAggLimitProjCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPAggLimitProjCov>() {
      public productmodel.BOPAggLimitProjCov newEmptyInstance() {
        return new productmodel.BOPAggLimitProjCov();
      }
      
      
    });
  }
}