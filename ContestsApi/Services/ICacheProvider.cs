using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContestsApi.Services
{
    public interface ICacheProvider
    {
        ICache GetCache();
    }
}
