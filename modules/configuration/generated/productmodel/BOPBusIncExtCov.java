package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPBusIncExtCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPBusIncExtCov extends entity.BOPBuildingCov {
  protected BOPBusIncExtCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPBusIncExtCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPBusIncExtCov");
  }
  
  public BOPBusIncExtCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPBusIncExtCov");
  }
  
  public productmodel.OptionBusIncomeExtendedType getBusIncomeExtendedTerm() {
    return (productmodel.OptionBusIncomeExtendedType)getCovTerm("BusIncomeExtended");
  }
  
  public boolean getHasBusIncomeExtendedTerm() {
    return hasCovTerm("BusIncomeExtended");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPBusIncExtCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPBusIncExtCov>() {
      public productmodel.BOPBusIncExtCov newEmptyInstance() {
        return new productmodel.BOPBusIncExtCov();
      }
      
      
    });
  }
}