package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPValuablePersonalPropertyItem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPValuablePersonalPropertyItem extends entity.HOPLineSchCovItemCov {
  protected HOPValuablePersonalPropertyItem()  {
    super((java.lang.Void)null);
  }
  
  public HOPValuablePersonalPropertyItem(entity.PolicyPeriod branch)  {
    super(branch, "zc9iqhupesj0fbpvo8ltn4526b8");
  }
  
  public HOPValuablePersonalPropertyItem(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zc9iqhupesj0fbpvo8ltn4526b8");
  }
  
  public productmodel.OptionHOPValuablePersonalPropertyItemAggregateLimitType getHOPValuablePersonalPropertyItemAggregateLimitTerm() {
    return (productmodel.OptionHOPValuablePersonalPropertyItemAggregateLimitType)getCovTerm("zrfje8tkfiolp0tu76rl0uhun6b");
  }
  
  public productmodel.OptionHOPValuablePersonalPropertyItemPerItemLimitType getHOPValuablePersonalPropertyItemPerItemLimitTerm() {
    return (productmodel.OptionHOPValuablePersonalPropertyItemPerItemLimitType)getCovTerm("zpoh0pntlgeci4n6otmb0n7rc59");
  }
  
  public productmodel.OptionHOPValuablePersonalPropertyItemTypeType getHOPValuablePersonalPropertyItemTypeTerm() {
    return (productmodel.OptionHOPValuablePersonalPropertyItemTypeType)getCovTerm("z8fiamifodmqv8ve4nn3u87cdf8");
  }
  
  public boolean getHasHOPValuablePersonalPropertyItemAggregateLimitTerm() {
    return hasCovTerm("zrfje8tkfiolp0tu76rl0uhun6b");
  }
  
  public boolean getHasHOPValuablePersonalPropertyItemPerItemLimitTerm() {
    return hasCovTerm("zpoh0pntlgeci4n6otmb0n7rc59");
  }
  
  public boolean getHasHOPValuablePersonalPropertyItemTypeTerm() {
    return hasCovTerm("z8fiamifodmqv8ve4nn3u87cdf8");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPValuablePersonalPropertyItemInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPValuablePersonalPropertyItem>() {
      public productmodel.HOPValuablePersonalPropertyItem newEmptyInstance() {
        return new productmodel.HOPValuablePersonalPropertyItem();
      }
      
      
    });
  }
}