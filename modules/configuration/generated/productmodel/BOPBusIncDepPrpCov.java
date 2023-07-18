package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPBusIncDepPrpCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPBusIncDepPrpCov extends entity.BOPBuildingCov {
  protected BOPBusIncDepPrpCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPBusIncDepPrpCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPBusIncDepPrpCov");
  }
  
  public BOPBusIncDepPrpCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPBusIncDepPrpCov");
  }
  
  public productmodel.DirectBOPBIDepPropLimType getBOPBIDepPropLimTerm() {
    return (productmodel.DirectBOPBIDepPropLimType)getCovTerm("BOPBIDepPropLim");
  }
  
  public boolean getHasBOPBIDepPropLimTerm() {
    return hasCovTerm("BOPBIDepPropLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPBusIncDepPrpCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPBusIncDepPrpCov>() {
      public productmodel.BOPBusIncDepPrpCov newEmptyInstance() {
        return new productmodel.BOPBusIncDepPrpCov();
      }
      
      
    });
  }
}